import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Database } from "@/types_db";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    // Create Supabase client with environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing Supabase environment variables');
    }

    const supabase = createClient<Database>(supabaseUrl, supabaseServiceKey);

    // Perform a lightweight query
    const { count, error } = await supabase
      .from('songs')
      .select('id', { count: 'exact', head: true });

    if (error) {
      throw error;
    }

    return NextResponse.json({ 
      success: true, 
      timestamp: new Date().toISOString(),
      message: 'Supabase connection active',
      count
    });
  } catch (error) {
    console.error('Heartbeat error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to connect to database'
    }, { status: 500 });
  }
}