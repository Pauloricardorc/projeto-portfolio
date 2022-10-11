import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  let ra = request.nextUrl.clone()   
  if (ra.pathname === '/') {
    ra.pathname = '/asdsss'
    return NextResponse.redirect(ra)   
  }
}