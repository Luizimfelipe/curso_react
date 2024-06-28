const Challenge = ()=>{
    const A = 12
    const B = 5

    return (
        <div>
            <h1>A recebe: {A}</h1>
            <h1>B recebe: {B}</h1>
            <button onClick={()=>{
                console.log(A + B)
            }}>Calcule</button>
        </div>
    )
}

export default Challenge;