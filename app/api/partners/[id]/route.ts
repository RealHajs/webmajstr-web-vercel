import { NextRequest, NextResponse } from 'next/server';
import { getPartner, updatePartner, deletePartner, supabase } from '@/lib/supabase';

// GET - Get single partner
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const partner = await getPartner(parseInt(id));

    if (!partner) {
      return NextResponse.json(
        { success: false, error: 'Partner not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: partner });
  } catch (error) {
    console.error('Error fetching partner:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch partner' },
      { status: 500 }
    );
  }
}

// PUT - Update partner
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json();
    const {
      name,
      nick,
      slug,
      country,
      website_url,
      bio,
      social_links,
      logo_url,
      profile_image_url,
      is_active,
      sort_order
    } = body;

    // Check if partner exists
    const existingPartner = await getPartner(parseInt(id));

    if (!existingPartner) {
      return NextResponse.json(
        { success: false, error: 'Partner not found' },
        { status: 404 }
      );
    }

    // Check if slug is being changed and if it already exists
    if (slug) {
      const { data: slugExists } = await supabase
        .from('partners')
        .select('id')
        .eq('slug', slug)
        .neq('id', parseInt(id))
        .limit(1);

      if (slugExists && slugExists.length > 0) {
        return NextResponse.json(
          { success: false, error: 'Partner with this slug already exists' },
          { status: 400 }
        );
      }
    }

    // Update partner
    const updatedPartner = await updatePartner(parseInt(id), {
      name: name || existingPartner.name,
      nick: nick || null,
      slug: slug || existingPartner.slug,
      country: country || null,
      website_url: website_url || null,
      bio: bio || null,
      social_links: social_links ? JSON.stringify(social_links) : null,
      logo_url: logo_url || null,
      profile_image_url: profile_image_url || null,
      is_active: is_active !== undefined ? is_active : existingPartner.is_active,
      sort_order: sort_order || 0
    });

    return NextResponse.json({ success: true, data: updatedPartner });
  } catch (error) {
    console.error('Error updating partner:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update partner' },
      { status: 500 }
    );
  }
}

// DELETE - Delete partner
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    // Check if partner exists
    const existingPartner = await getPartner(parseInt(id));

    if (!existingPartner) {
      return NextResponse.json(
        { success: false, error: 'Partner not found' },
        { status: 404 }
      );
    }

    // Delete partner
    await deletePartner(parseInt(id));

    return NextResponse.json({ success: true, message: 'Partner deleted successfully' });
  } catch (error) {
    console.error('Error deleting partner:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete partner' },
      { status: 500 }
    );
  }
} 