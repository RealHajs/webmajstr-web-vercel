import { NextRequest, NextResponse } from 'next/server';
import { getLatestNews } from '@/lib/supabase';

// GET - Get latest 3 published news articles
export async function GET() {
  try {
    const news = await getLatestNews(3);
    return NextResponse.json({ success: true, data: news });
  } catch (error) {
    console.error('Error fetching latest news:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch latest news' },
      { status: 500 }
    );
  }
} 