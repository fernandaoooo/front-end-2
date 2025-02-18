"use client"
import Image from "next/image";
import styles from "./pacientes.module.css";
import React, { useState, useEffect } from "react";

export default function Paciente() {
    const [pacientes, setpacientes] = useState([])
    const [pacientePesquisado, setPacientePesquisado] = useState([])
    const [mostrarInput, setMotarInput] = useState(false)

    async function apresentarpacientes() {
        try {
            const resposta = await fetch('https://api-clinica-2a.onrender.com/pacientes')
            if (!resposta.ok) {
                throw new Error("Erro ao buscar dados:" + resposta.statusText);

            }
            const dados = await resposta.json();
            setpacientes(dados)

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }

    }
    async function pesquisarPacientes(pacientePesquisado) {
        try {
            const resposta = await fetch(`https://api-clinica-2a.onrender.com/pacientes?nome=${pacientePesquisado}`)
            if (!resposta.ok) {
                throw new Error("Erro ao buscar dados:" + resposta.statusText);

            }
            const dados = await resposta.json();
            setPacientePesquisado(dados)

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }

    }

    useEffect(() => {
        apresentarpacientes()
        pesquisarPacientes('')
    }, [])
    return (

        <div className={styles.containerTablea}>
            <h3 className={styles.tituloTabela}>Pacientes</h3>
            <div className={styles.containerButton}>
                <button onClick={() => setMotarInput(!mostrarInput)}>Pesquisar pacientes</button>
            </div>
            {
                mostrarInput && (
                    <div className={styles.modal}>
                        <div className={styles.campoLista}>
                            <div className={styles.containerInput}>
                                <button className={styles.botaoClose} onClick={() => setMotarInput(!mostrarInput)}>Fechar</button>
                                <input type="text" placeholder="Nome do paciente" onChange={(e) => pesquisarPacientes(e.target.value)} />
                            </div>
                            <div className={styles.containerlista}>
                                <ul>
                                    {
                                        pacientePesquisado.map((paciente) =>
                                            <li key={paciente.id}>{paciente.nome}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className={styles.campoTabela}>
                <table className={styles.tabelaPacientes}>
                    <thead className={styles.topoTablea}>
                        <tr key="cabecalho" className={styles.linhaSuperior}>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>CPF</th>
                        </tr>
                    </thead>
                    <tbody className={styles.corpoTabela}>
                        {pacientes.map((paciente) => (
                            <tr key={paciente.id} className={styles.linhaCorpo}>
                                <td>{paciente.id}</td>
                                <td>{paciente.nome}</td>
                                <td>{paciente.telefone}</td>
                                <td>{paciente.email}</td>
                                <td>{paciente.cpf}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}