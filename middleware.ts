import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookie = cookies().get('Authorization');

  if (!cookie) {
    console.log("Authorization cookie not found. Redirecting to sign in.");
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  try {
    console.log("Authorization cookie found. Value:", cookie.value);

    const res = await fetch('https://accountprovider-silicon-et.azurewebsites.net/api/VerifyToken?code=ts9Mdueq3B1n2AHdQhQr7RUufJL9jyGKCHX7MFusLGGqAzFu2UO7KA%3D%3D', {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: cookie.value }) // Skicka token i body
    });

    const responseBody = await res.text();
    console.log("Response status from VerifyToken:", res.status);
    console.log("Response body from VerifyToken:", responseBody);

    if (res.status === 200) {
      return NextResponse.next(); // Proceed with the original request
    } else {
      console.log("Token verification failed. Redirecting to sign in.");
      return NextResponse.redirect(new URL("/signin", request.url));
    }
    
  } catch (error) {
    console.error("Error during token verification:", error);
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: "/account/:path*"
}



// import { cookies } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(request: NextRequest) {
//   const cookie = cookies().get('Authorization');

//   if (!cookie) {
//     return NextResponse.redirect(new URL("/signin", request.url));
//   }

//   try {
//     const res = await fetch('http://localhost:7226/api/VerifyToken', {
//       method: 'post',
//       headers: {
//         "Authorization": `bearer ${cookie.value}`
//       }
//     })

//     if (res.status === 200) 
//       NextResponse.redirect(request.url)
//     else 
//       return NextResponse.redirect(new URL("/signin", request.url));
    
//   } catch (error) {
//     return NextResponse.redirect(new URL("/signin", request.url));
//   }
// }

// export const config = {
//   matcher: "/account/:path*"
// }



// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(request: NextRequest) {
//   const cookie = request.cookies.get('Authorization');

//   if (!cookie) {
//     return NextResponse.redirect(new URL('/signin', request.url));
//   }

//   try {
//     const res = await fetch('https://accountprovider-silicon-et.azurewebsites.net/api/VerifyToken?code=ts9Mdueq3B1n2AHdQhQr7RUufJL9jyGKCHX7MFusLGGqAzFu2UO7KA%3D%3D', {
//       method: 'POST',
//       headers: {
//         "Authorization": `Bearer ${cookie}`
//       }
//     });

//     if (res.status === 200) {
//       return NextResponse.next();
//     } else {
//       return NextResponse.redirect(new URL('/signin', request.url));
//     }
//   } catch (error) {
//     return NextResponse.redirect(new URL("/signin", request.url));
//   }
// }

// export const config = {
//   matcher: "/account/:path*"
// }
