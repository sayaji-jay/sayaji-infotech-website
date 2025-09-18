import { NextResponse } from 'next/server';
import { getAllProjects } from '@/lib/projects';

export async function GET() {
  try {
    const projects = getAllProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}