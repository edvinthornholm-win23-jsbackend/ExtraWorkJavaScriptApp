
'use server';
import { cookies } from "next/headers";

type ActionTypes = {
    success: boolean,
    error?: string | undefined
}

export default async function signInActions(currentState: any, formData: FormData): Promise<ActionTypes> {
    const email = formData.get('email');
    const password = formData.get('password');
    const isPersistent = formData.get('isPersistent');

    try {
        const res = await fetch('https://accountprovider-silicon-et.azurewebsites.net/api/SignIn?code=Ob25kQ4jUHQx-RM7xorMr4KTCgHwNRms0oZ6ABKSV5btAzFu_VAyNw%3D%3D', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        console.log("Response status:", res.status);

        if (res.status === 200) {
            const result = await res.json();
            console.log("Response result:", result);

            cookies().set('Authorization', result.token, {
                secure: true,
                httpOnly: true,
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // Sätt ett riktigt datumobjekt här
                path: '/',
                sameSite: 'strict'
            });

            console.log("Authorization cookie set:", result.token);
            return { success: true };
        } else {
            const result = await res.json();
            console.log("Error response:", result);
            return { success: false, error: result.error };
        }
    } catch (error) {
        console.error("SignIn error:", error);
        return { success: false, error: 'Something went wrong, please try again later' };
    }
}


// 'use server';
// import { cookies } from "next/headers";
// import path from "path";

// type ActionTypes = {
//     success: boolean,
//     error?: string | undefined
// }

// export default async function signInActions(currentState: any, formData: FormData): Promise<ActionTypes>{
//     const email = formData.get('email');
//     const password = formData.get('password');
//     const isPersistent = formData.get('isPersistent');
    
//     try {
//         const res = await fetch('https://accountprovider-silicon-et.azurewebsites.net/api/SignIn?code=Ob25kQ4jUHQx-RM7xorMr4KTCgHwNRms0oZ6ABKSV5btAzFu_VAyNw%3D%3D', {
//             method: 'post',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify({ email, password })
//             //body: JSON.stringify({ email, password, isPersistent })
//         });

//         if (res.status === 200) {
//             const result = await res.json()

//             cookies().set('Authorization', result.token, {
//                 secure: true,
//                 httpOnly: true,
//                 expires: Date.now() + 24 * 60 * 60 * 1000 *1,
//                 path: '/',
//                 sameSite: 'strict'})
//                 console.log("Authorization cookie set:", result.token);
//             return { success: true };   

//         } else {
//             let result = await res.json();
//             return { success: false, error: result.error };
//         }
//     }
//     catch (error) {
//         return { success: false, error: 'Something went wrong, please try again later' };
//     }
// }
