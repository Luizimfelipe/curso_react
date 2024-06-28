const Events = () => {
    const handleMyEvent = (e) => {
         console.log(e);
         console.log("Ativou o Evento");
    };
        const renderSomething = (x) => {
            if(x) {

                return <h1>Renderizando isso</h1>
            } else {
                return <h1>Tambem posso isso seu merda</h1>

            }
        }


    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui seu otario</button>
                <div>
                <button onClick={() => console.log ("Clicou Otario")}>
                Clique aqui seu Otario de novo!
                </button>
                </div>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;