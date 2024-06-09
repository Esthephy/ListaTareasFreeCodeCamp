import "./App.css";
import logo from "./imagenes/logo.png";
import ListaDeTareas from "./componentes/ListaDeTareas.js";
function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={logo}
          className="freecodecamp-logo"
          alt="logo free code camp"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
