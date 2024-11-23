'use client'
import {useState} from "react"
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";


const Header = () =>{
    const [mostrarheader, setmostrarheader] = useState(false) 
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
               
                <div className={styles.menuu} onClick={() => setmostrarheader(!mostrarheader)}>
                    <div className={styles.menu}></div>
                    <div className={styles.menu}></div>
                    <div className={styles.menu}></div>
                {mostrarheader && (
                        <div className={styles.divs}>
                            <ul className={styles.listas}>
                                <li className={styles.lii}><Link href='/'>Home</Link></li>
                                <li className={styles.lii}><Link href='/sobre'>Carreira</Link></li>
                                <li className={styles.lii}><Link href='/albuns'>Álbuns</Link></li>
                            </ul>
                        </div>
                )
                }
                    <ul className={styles.lista}>
                        <li className={styles.li}><Link href='/'>Home</Link></li>
                        <li className={styles.li}><Link href='/sobre'>Carreira</Link></li>
                        <li className={styles.li}><Link href='/albuns'>Álbuns</Link></li>
                    </ul>
                </div>
            </nav>
            <p className={styles.gidle}>(G)- IDLE</p>
        </header>
    )
}

export default Header;