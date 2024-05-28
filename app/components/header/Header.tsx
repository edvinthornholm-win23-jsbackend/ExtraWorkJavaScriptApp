import Link from "next/link"
import styles from "./Header.module.css"

export default function Home() {
    return (
      <main>
        <header className="header">
            <div className="container">
                <Link href="/"><img src="/images/logo-light.svg" alt="" /></Link>
                <div id="menu">
                    <nav className="nav">
                        <Link href="/">Overview</Link>
                        <Link href="/">Features</Link>
                        <Link href="/courses">Courses</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                </div>
                <div className="btn-switch">
                    <label>Light</label>
                    <label className="switch" htmlFor="switch-mode">
                        <input type="checkbox" id="switch-mode" />
                        <span className="slider round"></span>
                    </label>
                    <label>Dark</label>
                </div>

                <div className="account-buttons">
                    <Link className="btn-gray"href="/signin"><i className="fa-light fa-right-to-bracket"></i><span>Sign in</span></Link>
                    <Link className="btn-theme"href="/signup"><i className="fa-regular fa-user"></i><span>Sign up</span></Link>

                </div>

            </div>
        </header>
      </main>
    );
  }
  

// import Link from "next/link"
// import styles from "./Header.module.css"

// export default function Home() {
//     return (
//       <main>
//         <header className={styles.header}>
//             <div className={`container ${styles.container}`}>
//                 <Link href="/"><img src="/images/logo-light.svg" alt="" /></Link>

//                 <nav className={styles.nav}>
//                     <Link href="/">Overview</Link>
//                     <Link href="/">Features</Link>
//                     <Link href="/courses">Courses</Link>
//                     <Link href="/contact">Contact</Link>
//                 </nav>

//                 <div className="btn-switch">
//                     <label>Light</label>
//                     <label className="switch" htmlFor="switch-mode">
//                         <input type="checkbox" id="switch-mode" />
//                         <span className="slider round"></span>
//                     </label>
//                     <label>Dark</label>
//                 </div>

//                 <div className={styles.accountButtons}>
//                     <Link className="btn-gray"href="/singin"><i className="fa-light fa-right-to-bracket"></i><span>Sign in</span></Link>
//                     <Link className="btn-theme"href="/singup"><i className="fa-regular fa-user"></i><span>Sign up</span></Link>

//                 </div>

//             </div>
//         </header>
//       </main>
//     );
//   }
  