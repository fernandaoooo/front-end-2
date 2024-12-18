'use client'
import { useEffect, useState } from "react"

export default function Efeitos(){
    // const [cont, setCont] = useState(0);
    // const [cont2, setCont2] = useState(0);
    // useEffect(()=> {
    //     console.log('Renderizou')
    // },[cont])

    const [ufs, setUfs] = useState([]);
    const [usSelected, setufSelected] = useState('');

const getUfs = async () => {
        try {
          const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
          if(!response.ok){
            throw new Error('Erro ao buscar dados: '+ response.statusText);
          }  
          const data = await response.json();
          setUfs(data);
          console.log(data);
        } catch (error) {
            console.log('Ocorreu algum erro: '+ error)
        }

}

useEffect(() => {
    getUfs();
},[])

    return (
        <div>
            {
               <select onChange={(ev) => setufSelected(ev.target.value)}>
                    <option value="">Selecione o estado</option>
                    {ufs.map((uf) => (
                        <option 
                            value={uf.id} 
                            key={uf.id}>
                            {uf.nome}
                        </option>
                    ))}
               </select>
            }
            <h1>Efeitos colaterais</h1>
            {/* <button onClick={() => (setCont(cont + 1))}>Adicionar</button>
            <p>Renderizações cont 1: {cont}</p>
            <button onClick={() => (setCont2(cont2 + 1))}>Adicionar</button>
            <p>Renderizações cont 2: {cont2}</p> */}
        </div>
    )
}
    