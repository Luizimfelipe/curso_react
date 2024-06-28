//Components
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponents from "./components/MyComponents";
import Events from "./components/Events";
import Challenge from "./components/Challenge";



//CSS Style
import "./App.css";



//Code
function App() {
  return (
    <div className="App"> 
     <h1>oi bebe</h1>
     <h2>chora na panela</h2>
     <FirstComponent />
     <TemplateExpressions/>
     <MyComponents />
     <Events />
     <Challenge/>
    </div>
  );
};

export default App;
