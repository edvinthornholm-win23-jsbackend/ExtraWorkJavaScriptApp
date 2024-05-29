'use client';
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Confirm() {
    const router = useRouter();
    const email = useSearchParams().get('email');
    const [error, setError] = useState<string>('');
    const [code, setCode] = useState<string>('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            let form = { email, VerificationCode: code };
            const res = await fetch('https://accountprovider-silicon-et.azurewebsites.net/api/Verify?code=HwoZCaf8Ahm8V2_PmT1a3QYhbjrdgcm3RHxrz3JAR6KEAzFumsH_gA%3D%3D', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            if (res.status === 200) {
                router.push("/signin");
            } else {
                let result = await res.json();
                setError(result.error);
            }
        }
        catch (error) {
            setError('Somthing went wrong, please try again later');
        }

    }

    return (
        <section id="signin">
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="container">
                <form onSubmit={handleSubmit} noValidate>
                    <h1>Confirm your account</h1>
                    <p>Don't get verification code? <Link href="resend">Resend here</Link>.</p>
                    
                    <div className="content">
                        <div id="form-email" className="input-group">
                            <label>Verification code</label>
                            <input value={code} onChange={(e => setCode(e.target.value))} type="text" name="code" placeholder="Enter your verification code"/>
                        </div>
                        <div>
                            {/* <div className="alert alert-danger"></div> */}
                            <button type="submit" className="btn btn-theme">Veryfy code</button>
                            
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
