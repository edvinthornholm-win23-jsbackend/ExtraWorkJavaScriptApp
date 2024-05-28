import Link from "next/link";

export default function Confirm() {
    return (
        <section id="signin">
            
            <div className="container">
                <form noValidate>
                    <h1>Confirm your account</h1>
                    <p>Don't get verification code? <Link href="resend">Resend here</Link>.</p>
                    
                    <div className="content">
                        <div id="form-email" className="input-group">
                            <label>Verification code</label>
                            <input type="text" name="code" placeholder="Enter your verification code"/>
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
  