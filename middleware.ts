import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get('Authorization');

  if (!cookie) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  try {
    const res = await fetch('https://accountprovider-silicon-et.azurewebsites.net/api/VerifyToken?code=ts9Mdueq3B1n2AHdQhQr7RUufJL9jyGKCHX7MFusLGGqAzFu2UO7KA%3D%3D', {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${cookie}`
      }
    });

    if (res.status === 200) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/signin', request.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }
}

export const config = {
  matcher: '/account/:path*'
}
