"use client"
import Image from "next/image";
import styles from "./medico.module.css";
import React, { useState, useEffect } from "react";

export default function Medico() {
    const [medicos, setMedicos] = useState([])
    const [medicoPesquisado, setMedicoPesquisado] = useState([])
    const [mostrarInput, setMotarInput] = useState(false)

    async function apresentarMedicos() {
        try {
            const resposta = await fetch('https://api-clinica-2a.onrender.com/medicos')
            if (!resposta.ok) {
                throw new Error("Erro ao buscar dados:" + resposta.statusText);

            }
            const dados = await resposta.json();
            setMedicos(dados)

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }

    }

    async function pesquisarMedicos(medicoPesquisado) {
        try {
            const resposta = await fetch(`https://api-clinica-2a.onrender.com/medicos?nome=${medicoPesquisado}`)
            if (!resposta.ok) {
                throw new Error("Erro ao buscar dados:" + resposta.statusText);

            }
            const dados = await resposta.json();
            setMedicoPesquisado(dados);

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    useEffect(() => {
        apresentarMedicos()
        pesquisarMedicos('')
    }, [])
    return (
        <div className={styles.containerTablea}>
            <h3 className={styles.tituloTabela}>Médicos</h3>
            <div className={styles.containerButton}>
                <button onClick={() => setMotarInput(!mostrarInput)}>Pesquisar médicos</button>
            </div>
            {
                mostrarInput && (
                    <div className={styles.modal}>
                        <div className={styles.campoLista}>
                            <div className={styles.containerInput}>
                                <button className={styles.botaoClose} onClick={() => setMotarInput(!mostrarInput)}>Fechar</button>
                                <input type="text" placeholder="Escreva o nome do médico aqui" onChange={(e) => pesquisarMedicos(e.target.value)} />
                            </div>
                            <div className={styles.containerlista}>
                                <ul>
                                    {
                                        medicoPesquisado.map((medico) =>
                                            <li key={medico.id}>{medico.nome}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className={styles.campoTabela}>
                <table className={styles.tabelaMedicos}>
                    <thead className={styles.topoTablea}>
                        <tr key="cabecalho" className={styles.linhaSuperior}>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>Especialidade</th>
                        </tr>
                    </thead>
                    <tbody className={styles.corpoTabela}>
                        {medicos.map((medico) => (
                            <tr key={medico.id} className={styles.linhaCorpo}>
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
        </div>
    )
}