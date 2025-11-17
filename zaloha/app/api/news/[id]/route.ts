import { NextRequest, NextResponse } from 'next/server';
import { getNewsArticle, updateNewsArticle, deleteNewsArticle, supabase } from '@/lib/supabase';

// GET - Get single news article
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const news = await getNewsArticle(parseInt(id));

    if (!news) {
      return NextResponse.json(
        { success: false, error: 'News article not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: news });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch news article' },
      { status: 500 }
    );
  }
}

// PUT - Update news article
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json();
    const {
      title,
      slug,
      excerpt,
      content,
      image_url,
      author,
      published_at,
      is_published,
      meta_title,
      meta_description
    } = body;

    // Check if news exists
    const existingNews = await getNewsArticle(parseInt(id));

    if (!existingNews) {
      return NextResponse.json(
        { success: false, error: 'News article not found' },
        { status: 404 }
      );
    }

    // Check if slug is being changed and if it already exists
    if (slug) {
      const { data: slugExists } = await supabase
        .from('news')
        .select('id')
        .eq('slug', slug)
        .neq('id', parseInt(id))
        .limit(1);

      if (slugExists && slugExists.length > 0) {
        return NextResponse.json(
          { success: false, error: 'News article with this slug already exists' },
          { status: 400 }
        );
      }
    }

    // Update news article
    const updatedNews = await updateNewsArticle(parseInt(id), {
      title: title || existingNews.title,
      slug: slug || existingNews.slug,
      excerpt: excerpt || null,
      content: content || null,
      image_url: image_url || null,
      author: author || null,
      published_at: published_at || null,
      is_published: is_published !== undefined ? is_published : existingNews.is_published,
      meta_title: meta_title || null,
      meta_description: meta_description || null
    });

    return NextResponse.json({ success: true, data: updatedNews });
  } catch (error) {
    console.error('Error updating news:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update news article' },
      { status: 500 }
    );
  }
}

// DELETE - Delete news article
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    // Check if news exists
    const existingNews = await getNewsArticle(parseInt(id));

    if (!existingNews) {
      return NextResponse.json(
        { success: false, error: 'News article not found' },
        { status: 404 }
      );
    }

    // Delete news article
    await deleteNewsArticle(parseInt(id));

    return NextResponse.json({ success: true, message: 'News article deleted successfully' });
  } catch (error) {
    console.error('Error deleting news:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete news article' },
      { status: 500 }
    );
  }
} 