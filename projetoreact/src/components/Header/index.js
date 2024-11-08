import Link from "next/link"
import styles from "./header.module.css"

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><link href="/home">Home</link></li>
                    <li><link href="/sobre">Sobre</link></li>
                    <li><link href="/contato">Contato</link></li>
                </ul>
            </nav>
        </header>
    )
}