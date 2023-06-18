import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/task_list';
import ComponentAComponent from './components/container/componentA';
// import ComponentAComponent from './components/container/componentA';

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

          <ComponentAComponent>

          </ComponentAComponent>

          {/* Lessons 1, 2, 3 */}
          {/* <ComponentAComponent>

          </ComponentAComponent> */}

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
