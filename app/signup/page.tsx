'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

export default function SignUp() {
    const router = useRouter();
    const [error, setError] = useState<string>('');
    const checkboxref = useRef<HTMLInputElement | null>(null);
    const [signUpForm, setSignUpForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAndConditions: false
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSignUpForm(data => ({ ...data, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch('https://accountprovider-silicon-et.azurewebsites.net/api/SignUp?code=cYtsZq_FaHg6C0Er6UZvXr2uPKBEey6WhsRZY75dnVS6AzFuoGrSoA%3D%3D', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signUpForm)
            });

            if (res.status === 200) {
                router.push("/confirm?email=" + signUpForm.email);
            } else {
                const result = await res.json();
                setError(result.error || "An unexpected error occurred");
            }
        } catch (error) {
            setError("Failed to fetch. Please check your network connection and try again.");
        }
    }

    return (
        <section id="signup">
              {error && <div className="alert alert-danger">{error}</div>}
            <div className="container">
              
                <form onSubmit={handleSubmit} noValidate>
                    <h1>Create Account</h1>
                    <p>Already have an account? <Link href="/signin">Sign in here</Link>. </p>

                    <div className="content">
                        <div className="input-group">
                            <label>FirstName</label>
                            <input value={signUpForm.firstName} onChange={onChange} type="text" name="firstName" />
                        </div>

                        <div className="input-group">
                            <label>LastName</label>
                            <input value={signUpForm.lastName} onChange={onChange} type="text" name="lastName" />
                        </div>

                        <div className="input-group">
                            <label>Email</label>
                            <input value={signUpForm.email} onChange={onChange} type="email" name="email" />
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <input value={signUpForm.password} onChange={onChange} type="password" name="password" />
                        </div>

                        <div className="input-group">
                            <label>ConfirmPassword</label>
                            <input value={signUpForm.confirmPassword} onChange={onChange} type="password" name="confirmPassword" />
                        </div>

                        <div id="form-terms" className="checkbox">
                            <div className="checkbox">
                                <input ref={checkboxref} type="checkbox" name="termsAndConditions" />
                                <label>I agree to the <a href="/">Terms</a> & <a href="/">Conditions</a>.</label>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-theme">Sign Up</button>
                </form>
            </div>
        </section>
    );
}



// 'use client'

// import { sign } from "crypto";
// import { on } from "events";
// import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { ChangeEvent, FormEvent, useRef, useState } from "react";

// export default function SignUp() {
//     const router = useRouter(); // ned to use next/navigation because the auther is not working for th moment
//     const [error, setError] = useState<string>('');
//     const checkboxref = useRef<HTMLInputElement | null>(null);
//     const [signUpForm, setSignUpForm] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         termsAndConditions: false
//     });

//     const onChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setSignUpForm(data => ({ ...data, [e.target.name]: e.target.value }));
//     }

//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//        const res = await fetch('https://accountprovider-silicon-et.azurewebsites.net/api/SignUp?code=cYtsZq_FaHg6C0Er6UZvXr2uPKBEey6WhsRZY75dnVS6AzFuoGrSoA%3D%3D', {
//         method: 'post',
//         headers: {
//             'content-type': 'application/json'
//             },
//             body: JSON.stringify(signUpForm)
//         })

//         if (res.status === 200) { 
//             router.push("/confirm?email=" + signUpForm.email)
//         } else {
//             let result = await res.json();
//             setError(result.error);
//         }
//     }



//     return (
//         <section id="signup">
//             <div className="container">
//                 {error && <div className="alert alert-danger">{error}</div>}
//                 <form onSubmit={handleSubmit} noValidate>
//                     <h1>Create Account</h1>
//                     <p>Already have an account? <Link href="/signin">Sign in here</Link>. </p>

//                     <div className="content">
//                         <div className="input-group">
//                             <label>FirstName</label>
//                             <input value={signUpForm.firstName} onChange={onChange} type="text" name="firstName"  />
//                         </div>

//                         <div className="input-group">
//                             <label>LastName</label>
//                             <input value={signUpForm.lastName} onChange={onChange} type="text" name="lastName" />
//                         </div>

//                         <div className="input-group">
//                             <label>Email</label>
//                             <input value={signUpForm.email} onChange={onChange} type="email" name="email" />
//                         </div>

//                         <div className="input-group">
//                             <label>Password</label>
//                             <input value={signUpForm.password} onChange={onChange} type="password" name="password" />
//                         </div>

//                         <div className="input-group">
//                             <label>ConfirmPassword</label>
//                             <input value={signUpForm.confirmPassword} onChange={onChange} type="password" name="confirmPassword" />
//                         </div>

//                         <div id="form-terms" className="checkbox">
//                             <div className="checkbox">
//                                 <input ref={checkboxref} type="checkbox" name="termsAndConditions" />
//                                 <label>I agree to the <a href="/">Terms</a> & <a href="/">Conditions</a>.</label>
//                             </div>
//                         </div>
//                     </div>

//                     <button type="submit" className="btn btn-theme">Sign Up</button>
//                 </form>
//             </div>
//         </section>
//     );
// }
