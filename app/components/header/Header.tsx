'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import useLogout from '../utils/auth';

export default function Header() {
    const handleLogout = useLogout();

    return (
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
                    <button onClick={handleLogout} className="btn-gray btn">
                        <i className="fa-light fa-right-from-bracket btn-icon"></i>Sign Out
                    </button>
                    <div className="profile-img">
                        <Link href="/account/details">
                            <img src="/images/uploads/profiles/avatar.jpg" alt="Profile image"/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
