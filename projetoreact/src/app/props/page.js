import Card from '@/components/Card'; 

export default function Props(){

    const dogs = [
        {
            id: 1,
            nome: 'Kiara',
            raca: 'Pastor-alemão',
            peso: 20,
            cor: 'Amarela'
        },
        {
            id: 2,
            nome: 'Amora',
            raca: 'Pinscher',
            peso: 1.0,
            cor: 'Preta'
        },
        {
            id: 3,
            nome: 'Lola',
            raca: 'Maltês',
            peso: 3.5,
            cor: 'Branco'
        },
    ]
    return (
        <div>
            <h1>Props</h1>
            <div>
                {dogs.map((dog) => (
                    <Card key={dog.id} 
                    nome = {dog.nome} 
                    raca = {dog.raca} 
                    peso = {dog.peso} 
                    cor = {dog.cor}
                    />
                ))}
            </div>
        </div>    
    )
}