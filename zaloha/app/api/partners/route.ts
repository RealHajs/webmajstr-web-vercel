import { NextRequest, NextResponse } from 'next/server';
import { getPartners, createPartner, supabase } from '@/lib/supabase';

// GET - Get all partners
export async function GET() {
  try {
    const partners = await getPartners();
    return NextResponse.json({ success: true, data: partners });
  } catch (error) {
    console.error('Error fetching partners:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch partners' },
      { status: 500 }
    );
  }
}

// POST - Create new partner
export async function POST(request: NextRequest) {
  try {
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
      is_active = true,
      sort_order = 0
    } = body;

    // Validate required fields
    if (!name || !slug) {
      return NextResponse.json(
        { success: false, error: 'Name and slug are required' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const { data: existingPartners } = await supabase
      .from('partners')
      .select('id')
      .eq('slug', slug)
      .limit(1);

    if (existingPartners && existingPartners.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Partner with this slug already exists' },
        { status: 400 }
      );
    }

    // Create new partner
    const newPartner = await createPartner({
      name,
      nick: nick || null,
      slug,
      country: country || null,
      website_url: website_url || null,
      bio: bio || null,
      social_links: social_links ? JSON.stringify(social_links) : null,
      logo_url: logo_url || null,
      profile_image_url: profile_image_url || null,
      is_active,
      sort_order: sort_order || 0
    });

    return NextResponse.json({ success: true, data: newPartner });
  } catch (error) {
    console.error('Error creating partner:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create partner' },
      { status: 500 }
    );
  }
} 