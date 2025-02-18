"use client"
import styles from "./medicos.module.css";
import React, { useState, useEffect } from "react";

export default function Medico() {
    const [medicos, setMedicos] = useState([]);
    const [medicoPesquisado, setMedicoPesquisado] = useState([]);
    const [mostrarInput, setMostrarInput] = useState(false);

    async function apresentarMedicos() {
        try {
            const resposta = await fetch('https://api-clinica-2a.onrender.com/medicos', {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
    
            if (!resposta.ok) {
                throw new Error(`Erro ao buscar dados: ${resposta.status} ${resposta.statusText}`);
            }
    
            const dados = await resposta.json();
            console.log("Dados recebidos:", dados);
            setMedicos(dados);
    
        } catch (error) {
            console.error('Ocorreu um erro ao buscar os médicos:', error);
        }
    }
    

    async function pesquisarMedicos(nome) {
        try {
            const resposta = await fetch(`https://api-clinica-2a.onrender.com/medicos?nome=${nome}`);
            if (!resposta.ok) throw new Error("Erro ao buscar médicos: " + resposta.statusText);

            const dados = await resposta.json();
            setMedicoPesquisado(Array.isArray(dados) ? dados : []);
        } catch (error) {
            console.error('Erro ao pesquisar médicos:', error);
        }
    }

    useEffect(() => {
        apresentarMedicos();
    }, []);

    return (
        <div className={styles.containerTabela}>
            <h3 className={styles.tituloTabela}>Médicos</h3>
            <div className={styles.containerButton}>
                <button onClick={() => setMostrarInput(!mostrarInput)}>Pesquisar médicos</button>
            </div>
            
            {mostrarInput && (
                <div className={styles.modal}>
                    <div className={styles.campoLista}>
                        <div className={styles.containerInput}>
                            <button className={styles.botaoClose} onClick={() => setMostrarInput(false)}>X</button>
                            <input 
                                type="text" 
                                placeholder="Nome do médico aqui" 
                                onChange={(e) => pesquisarMedicos(e.target.value)}
                            />
                        </div>
                        <div className={styles.containerLista}>
                            <ul>
                                {medicoPesquisado.length > 0 ? (
                                    medicoPesquisado.map((medico) => (
                                        <li key={medico.id}>{medico.nome}</li>
                                    ))
                                ) : (
                                    <li>Nenhum médico encontrado</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <div className={styles.campoTabela}>
                <table className={styles.tabelaMedicos}>
                    <thead className={styles.topoTabela}>
                        <tr className={styles.linhaSuperior}>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>Especialidade</th>
                        </tr>
                    </thead>
                    <tbody className={styles.corpoTabela}>
                        {medicos.length > 0 ? (
                            medicos.map((medico) => (
                                <tr key={medico.id} className={styles.linhaCorpo}>
                                    <td>{medico.id}</td>
                                    <td>{medico.nome}</td>
                                    <td>{medico.telefone}</td>
                                    <td>{medico.email}</td>
                                    <td>{medico.especialidade}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className={styles.semDados}>Nenhum médico encontrado</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
