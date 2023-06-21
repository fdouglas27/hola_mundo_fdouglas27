import logo from './logo.svg';
import './App.css';
// import Ejemplo1 from './hooks/ejemplo1';
// import Ejemplo2 from './hooks/ejemplo2';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/task_list';
// import ComponentAComponent from './components/container/componentA';
// import ComponentAComponent from './components/container/componentA';
import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';
import { ComponenteEstado } from './components/tutoria1/componenteEstado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio greeting.jsx */}
        {/* <Greeting name="Federico">
          </Greeting> */}

        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name="Federico">
          </GreetingF> */}

        {/* Componente de listado de tareas */}
        {/* <TaskListComponent>
          </TaskListComponent> */}

        {/* E */}
        {/* <ComponentAComponent>
          </ComponentAComponent> */}

        {/* Exercises lessons 1, 2, 3 */}
        {/* <ComponentAComponent>
          </ComponentAComponent> */}

        {/* Example of HOOKS use */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        
        {/* Todo los que hay aquí, es tratado como props.children */}
        {/* <Ejemplo4 nombre="Federico">
          <h3>
            Contenido del props.children 
          </h3>
        </Ejemplo4> */}

        {/* Ejemplo tutoria minuto 62 */}
        <ComponenteEstado></ComponenteEstado>
        {/* <p>
          HOLA MUNDO
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
