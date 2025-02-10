"use client"
import Image from "next/images";
import styles from "./medicos.module.css";
import React, { useState, useEffect } from "react";

export default function medico() {
    const [medicos, setMedicos] = useState([])
    async function apresentarMedicos() {
        const resposta = await fetch('https://api-clinica-2a.onrender.com/medicos')
        const dados = await resposta.json()
        setMedicos(dados)
    }
    useEffect(() => {
        apresentarMedicos()
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr key="cabecalho">
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Especialidade</th>
                    </tr>
                </thead>
                <tbody>
                    {medicos.map((medico) => (
                        <tr key={medico.id}>
                            <td>{medico.id}</td>
                            <td>{medico.nome}</td>
                            <td>{medico.telefone}</td>
                            <td>{medico.email}</td>
                            <td>{medico.especialidade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}