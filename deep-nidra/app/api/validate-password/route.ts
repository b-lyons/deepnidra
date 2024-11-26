import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { password } = await request.json()
  
  // In a real application, you would use an environment variable here
  const correctPassword = process.env.SITE_PASSWORD || 'deepnidra2023'

  if (password === correctPassword) {
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ success: false }, { status: 401 })
  }
}

