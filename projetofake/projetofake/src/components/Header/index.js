"use client"
import Link from "next/link"
import style from "./header.module.css"
import { useState } from "react";

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.botao}>
                <img src="/images/logo.png" alt="Logo" className={style.logo} />
            </div>
            <nav className={style.navContainer}>
                <ul className={style.navList}>
                    <li className={style.navItem}>
                        <Link href="/" className={style.navLink}>Home</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link href="#" className={style.navLink}>Médico</Link>
                        <ul className={style.subMenu}>
                            <li className={style.navItem}>
                                <Link href="medico" className={style.navLink}>Listar</Link>
                            </li>
                            <li className={style.navItem}>
                                <Link href="#" className={style.navLink}>Adicionar</Link>
                            </li>
                            <li className={style.navItem}>
                                <Link href="#" className={style.navLink}>Editar</Link>
                            </li>
                            <li className={style.navItem}>
                                <Link href="#" className={style.navLink}>Excluir</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={style.navItem}>
                        <Link href="#" className={style.navLink}>Paciente</Link>
                        <ul className={style.subMenu}>
                            <li className={style.navItem}>
                                <Link href="#" className={style.navLink}>Listar</Link>
                            </li>
                            <li className={style.navItem}>
                                <Link href="#" className={style.navLink}>Adicionar</Link>
                            </li>
                            <li className={style.navItem}>
                                <Link href="#" className={style.navLink}>Editar</Link>
                            </li>
                            <li className={style.navItem}>
                                <Link href="#" className={style.navLink}>Excluir</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={style.navItem}>
                        <Link href="#" className={style.navLink}>Consulta</Link>
                        <ul className={style.subMenu}>
                            <li className={style.navItem}>
                                <Link href="#" className={style.navLink}>Listar consultas</Link>
                            </li>
                            <li className={style.navItem}>
                                <Link href="#" className={style.navLink}>Agendar consulta</Link>
                            </li>
                            <li className={style.navItem}>
                                <Link href="#" className={style.navLink}>Editar agendamento</Link>
                            </li>
                            <li className={style.navItem}>
                                <Link href="#" className={style.navLink}>Cancelar</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}