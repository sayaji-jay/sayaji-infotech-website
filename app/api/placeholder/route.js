import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const logoPath = join(process.cwd(), 'public', 'images', 'logo1.png');
    const logoBuffer = readFileSync(logoPath);

    return new NextResponse(logoBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    console.error('Error serving logo:', error);
    return NextResponse.json(
      { error: 'Logo not found' },
      { status: 404 }
    );
  }
}