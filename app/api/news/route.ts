import { NextRequest, NextResponse } from 'next/server';
import { getNews, createNewsArticle, supabase } from '@/lib/supabase';

// GET - Get all news
export async function GET() {
  try {
    const news = await getNews();
    return NextResponse.json({ success: true, data: news });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}

// POST - Create new news article
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      slug,
      excerpt,
      content,
      image_url,
      author,
      published_at,
      is_published = false,
      meta_title,
      meta_description
    } = body;

    // Validate required fields
    if (!title || !slug) {
      return NextResponse.json(
        { success: false, error: 'Title and slug are required' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const { data: existingNews } = await supabase
      .from('news')
      .select('id')
      .eq('slug', slug)
      .limit(1);

    if (existingNews && existingNews.length > 0) {
      return NextResponse.json(
        { success: false, error: 'News article with this slug already exists' },
        { status: 400 }
      );
    }

    // Create new news article
    const newNews = await createNewsArticle({
      title,
      slug,
      excerpt: excerpt || null,
      content: content || null,
      image_url: image_url || null,
      author: author || null,
      published_at: published_at || null,
      is_published,
      meta_title: meta_title || null,
      meta_description: meta_description || null
    });

    return NextResponse.json({ success: true, data: newNews });
  } catch (error) {
    console.error('Error creating news:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create news article' },
      { status: 500 }
    );
  }
} 