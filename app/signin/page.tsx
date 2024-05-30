'use client';

import Link from "next/link";
import { useFormState } from "react-dom";
import signInActions from "./signInAction";
import { use, useEffect } from "react";

import { error } from "console";
import { useRouter } from "next/navigation";

export default function SignIn() {
const [signInForm, setSignInForm] = useFormState(signInActions, { success: false });
const router = useRouter()

    useEffect(() => {
        if (signInForm.success) {
            router.push('/account/details');
        }
    }, [signInForm]);


    return (
        <section id="signin">
            {signInForm?.error && <div className="alert alert-danger">{signInForm?.error}</div>}

            <div className="container">
                <form action={setSignInForm} noValidate>
                    <h1>Welcome Back</h1>
                    <p>Don't have an account? <Link href="signup">Sign up here</Link>.</p>
                    
                    <div className="content">
                        <div id="form-email" className="input-group">
                            <label>Email</label>
                            <input type="text" name="email"/>
                        </div>
                        <div id="form-password" className="input-group">
                            <label>Password</label>
                            <input type="password" name="password"/>
                        </div>
                        <div id="form-terms" className="checkbox">
                            <input type="checkbox" name="isPersistent"/>
                            <label>Remember me</label>
                        </div>
                        <div>
                            {/* <div className="alert alert-danger"></div> */}
                            <button type="submit" className="btn btn-theme">Log in</button>
                            
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
