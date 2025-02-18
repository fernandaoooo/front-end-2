"use client"
import styles from "./consultas.module.css";
import React, { useState, useEffect } from "react";

export default function Consulta() {
    const [consultas, setConsultas] = useState([]);
    const [pacientePesquisado, setPacientePesquisado] = useState([]);
    const [medicoPesquisado, setMedicoPesquisado] = useState([]);
    const [resultadoPacientes, setResultadoPacientes] = useState([]);
    const [resultadoMedicos, setResultadoMedicos] = useState([]);
    const [mostrarInputMedico, setMostrarInputMedico] = useState(false);
    const [mostrarInputPaciente, setMostrarInputPaciente] = useState(false);

    async function apresentarConsultas() {
        try {
            const resposta = await fetch('https://api-clinica-2a.onrender.com/consultas');
            if (!resposta.ok) {
                throw new Error("Erro ao buscar dados:" + resposta.statusText);

            }
            const dados = await resposta.json();
            setConsultas(dados);

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }
    async function pesquisarPacientes(paciente) {
        try {
            const resposta = await fetch(`https://api-clinica-2a.onrender.com/consultas?paciente=${paciente}`)
            if (!resposta.ok) {
                throw new Error("Erro ao buscar dados:" + resposta.statusText);

            }
            const dados = await resposta.json();
            setResultadoPacientes(dados);

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    async function pesquisarMedicos(medico) {
        try {
            const resposta = await fetch(`https://api-clinica-2a.onrender.com/consultas?medico=${medico}`);
            if (!resposta.ok) {
                throw new Error("Erro ao buscar dados:" + resposta.statusText);

            }
            const dados = await resposta.json();
            setResultadoMedicos(dados);

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    useEffect(() => {
        apresentarConsultas();
        pesquisarMedicos('');
        pesquisarPacientes('');
    }, []);

    return (
        <div className={styles.containerTablea}>
            <h3 className={styles.tituloTabela}>Consultas</h3>
            <div className={styles.containerButton}>
                <button onClick={() => setMostrarInputPaciente(!mostrarInputPaciente)}>Pesquisar pacientes</button>
            </div>
            <div className={styles.containerButton}>
                <button onClick={() => setMostrarInputMedico(!mostrarInputMedico)}>Pesquisar médicos</button>
            </div>
            {mostrarInputMedico && (
                <div className={styles.modal}>
                    <div className={styles.campoLista}>
                        <div className={styles.containerInput}>
                            <button className={styles.botaoClose} onClick={() => setMostrarInputMedico(false)}>Fechar</button>
                            <input
                                type="text"
                                placeholder="Nome do médico"
                                value={medicoPesquisado}
                                onChange={(e) => {
                                    setMedicoPesquisado(e.target.value);
                                    pesquisarMedicos(e.target.value);
                                }}
                            />
                        </div>
                        <div className={styles.containerlista}>
                            <ul>
                                {resultadoMedicos.map((medico) => (
                                    <li key={medico.id}>{medico.nome}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            {mostrarInputPaciente && (
                <div className={styles.modal}>
                    <div className={styles.campoLista}>
                        <div className={styles.containerInput}>
                            <button className={styles.botaoClose} onClick={() => setMostrarInputPaciente(false)}>Fechar</button>
                            <input
                                type="text"
                                placeholder="Nome do paciente"
                                value={pacientePesquisado}
                                onChange={(e) => {
                                    setPacientePesquisado(e.target.value);
                                    pesquisarPacientes(e.target.value);
                                }}
                            />
                        </div>
                        <div className={styles.containerlista}>
                            <ul>
                                {resultadoPacientes.map((paciente) => (
                                    <li key={paciente.id}>{paciente.nome}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            <div className={styles.campoTabela}>
                <table className={styles.tabelaConsulta}>
                    <thead className={styles.topoTablea}>
                        <tr className={styles.linhaSuperior}>
                            <th>ID</th>
                            <th>Médico</th>
                            <th>Especialidade</th>
                            <th>Paciente</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody className={styles.corpoTabela}>
                        {consultas.map((consulta) => (
                            <tr key={consulta.id} className={styles.linhaCorpo}>
                                <td>{consulta.id}</td>
                                <td>{consulta.medico}</td>
                                <td>{consulta.especialidade}</td>
                                <td>{consulta.paciente}</td>
                                <td>{consulta.tipo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}