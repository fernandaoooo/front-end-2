"use client"
import Link from "next/link"
import style from "./header.module.css"
import { useState } from "react";
import Image from "next/image"

export default function Header() {
    const [showMenu, setShowMenu] = useState(true)
    const [buttonText, setButtonText] = useState("aparecendo")

    const handleClick = () => {
        setShowMenu(!showMenu)
        setButtonText(showMenu ? "desaparecendo" : "aparecendo")
    }

    return (
        <header className={style.header}>
            <button className={style.botao} onClick={handleClick}>
                <Image
                    src="/images/barbie.png"
                    alt="Girassol" className={style.girassol}
                    width={60} 
                    height={60}
                />
            </button>
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
        </header>
    )
}