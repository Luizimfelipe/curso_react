import MyComponents from "./MyComponents";

const FirstComponent = () => {
  // sempre voltar no return para o app.jsx
  
  return (
    
    <div>
       <h1>Meu primeiro componente</h1>
       <p className="teste">meu texto</p>
       <MyComponents />
    </div>
  );
};

export default FirstComponent;
