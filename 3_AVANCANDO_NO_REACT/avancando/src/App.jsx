
import "./App.css";
import City from "./assets/city.jpg";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";

//Code
// imagem em assets que normalmente são usadas uma vez só
function App() {
  return (
    <div className="App"> 
        <h1>Avancando em  React</h1>
        {/* imagem em public*/}
        <div>
          <img src="/img1.jpg" alt="Paisagem" />         
        </div>
        {/* imagem em Asset*/} 
  
        <div>
          <img src={City} alt="cidade" />
        </div>
        <ManageData/>
        <ListRender/>
    </div>
  );
};


export default App;
