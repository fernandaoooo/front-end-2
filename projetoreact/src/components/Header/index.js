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
                    src="/images/Stitch.png"
                    alt="Stitch" className={style.cachorro}
                    width={60} 
                    height={60}
                />
            </button>
<<<<<<< HEAD
            {
                showMenu &&
                <nav>
                    <ul className={style.navList}>
                        <li className={style.navItem}>
                            <Link href="/state" className={style.navLink}>Início</Link>
                        </li>
                        <li className={style.navItem}>
                            <Link href="/sobre" className={style.navLink}>Sobre</Link>
                        </li>
                        <li className={style.navItem}>
                            <Link href="/contato" className={style.navLink}>Contato</Link>
                        </li>
                        <li className={style.navItem}>
                            <Link href="/listas" className={style.navLink}>Listas</Link>
                        </li>
                    </ul>
                </nav>
            }
=======
            <nav className={`${style.nav} ${showMenu ? style.open : ""}`}>
                <ul className={style.navList}>
                    <li className={style.navItem}>
                        <Link href="/" className={style.navLink}>Início</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link href="/sobre" className={style.navLink}>Sobre</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link href="/contato" className={style.navLink}>Contato</Link>
                    </li>
                </ul>
            </nav>
>>>>>>> 110d46f3a3c7dfb9b8f2ed1d7ee580f3df8c4e01
        </header>
    )
}


