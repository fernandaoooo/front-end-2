"use client"
import Link from "next/link"
import style from "./header.module.css"
import { useState } from "react";
import Image from "next/image"

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className={style.header}>
            <button onClick={toggleMenu} className={style.menuToggle}>
                <Image
                    src="/images/iconehospital.png"
                    alt="Stitch" className={style.cachorro}
                    width={60} 
                    height={60}
                />
            </button>
            <nav className={`${style.nav} ${showMenu ? style.open : ""}`}>
                <ul className={style.navList}>
                    <li className={style.navItem}>
                        <Link href="/" className={style.navLink}>Início</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link href="/medico" className={style.navLink}>Médico</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link href="/paciente" className={style.navLink}>Paciente</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link href="/consulta" className={style.navLink}>Consulta</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}