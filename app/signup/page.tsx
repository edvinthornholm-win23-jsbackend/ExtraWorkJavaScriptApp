import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
    // const [signUpForm, setSignUpForm] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //     termsAndConditions: false
    // });

    // const handleInputChange = (e) => {
    //     const { name, value, type, checked } = e.target;
    //     setSignUpForm(prevState => ({
    //         ...prevState,
    //         [name]: type === "checkbox" ? checked : value
    //     }));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Skicka formulärdata till din backend för registrering
    //     console.log(signUpForm);
    // };

    return (
        <section id="signup">
            <div className="container">
                <form noValidate>
                    <h1>Create Account</h1>
                    <p>Already have an account? <Link href="/signin">Sign in here</Link>. </p>

                    <div className="content">
                        <div className="input-group">
                            <label>FirstName</label>
                            <input type="text" name="firstName"  />
                        </div>

                        <div className="input-group">
                            <label>LastName</label>
                            <input type="text" name="lastName" />
                        </div>

                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" name="email" />
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" name="password" />
                        </div>

                        <div className="input-group">
                            <label>ConfirmPassword</label>
                            <input type="password" name="confirmPassword" />
                        </div>

                        <div id="form-terms" className="checkbox">
                            <div className="checkbox">
                                <input type="checkbox" name="termsAndConditions" />
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
