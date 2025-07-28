import { NextRequest, NextResponse } from 'next/server';
import { getDashboardStats } from '@/lib/supabase';

// GET - Get dashboard statistics
export async function GET() {
  try {
    const stats = await getDashboardStats();
    return NextResponse.json({ success: true, data: stats });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch dashboard statistics' },
      { status: 500 }
    );
  }
} 