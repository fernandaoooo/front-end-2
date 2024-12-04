export default function Listas() {
    const racas = ['Vira-lata', 'Pit-bull', 'Pug', 'Shitzu', 'Labrador']

    const racasObj = [
        {
            id:1,
            raca: 'Vira-lata',
        },
        {
            id:2,
            raca: 'Pit-bull',
        },
        {
            id:3,
            raca: 'Pug',
        },
        {
            id:4,
            raca: 'Shitzu',
        },
        {
            id:5,
            raca: 'Labrador',
        }
    ]

    return (
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <h1>Lista comum</h1>
            <ul>
                {racas.map((raca,i) => (
                    <li key={i}>{i+1} - {raca}</li>
                ))}
            </ul>
            <h2>Lista de objetos</h2>
            <ul>
                {racasObj.map((racaObj) => (
                    <div key={racaObj.id}>
                        <h3>{racaObj.id}</h3>
                        <p>{racaObj.raca}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}