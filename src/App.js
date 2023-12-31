import logo from './logo.svg';
import './App.css';
// import Ejemplo1 from './hooks/ejemplo1';
// import Ejemplo2 from './hooks/ejemplo2';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Father from './components/container/father';
import ContactListComponent from './ejerciciosSesiones789/contact_list';
import OptionalRender from './components/pure/optionalRender';
import ChangingColor from './ejerciciosSesiones101112/changingColor';
// import ComponentAComponent from './components/container/componentA';
// import ComponentAComponent from './components/container/componentA';
import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo2 from './hooks/ejemplo2';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import TaskListFormikComponent from './ejerciciosSesiones131415/task_listFormik';
import AsyncExample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/ObservableExample';
import FetchExample from './components/pure/fetchExample';
import AxiosExample from './components/pure/AxiosExample';

// import Ejemplo4 from './hooks/ejemplo4';
// import { ComponenteEstado } from './components/tutoria1/componenteEstado';
// import GreetingStyled from './components/pure/greetingStyled';
// import Clock from './ejerciciosSesiones456/class.clock';
// import { ClockFuntional } from './ejerciciosSesiones456/clock';
// import AllCycles from './hooks/lifeCycle/AllCycles';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* Componente propio greeting.jsx */}
      {/* <Greeting name="Federico">
          </Greeting> */}

      {/* Componente de ejemplo funcional */}
      {/* <GreetingF name="Federico">
          </GreetingF> */}

      {/* Componente de listado de tareas */}
      {/* !!!!!!!! Principal !!!!!!!!!!!!!!!! */}
      {/* <TaskListComponent></TaskListComponent> */}

      {/* E */}
      {/* <ComponentAComponent>
          </ComponentAComponent> */}

      {/* Exercises lessons 1, 2, 3 */}
      {/* <ComponentAComponent>
          </ComponentAComponent> */}

      {/* Example of HOOKS use */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <Ejemplo2></Ejemplo2> */}


      {/* <MiComponenteConContexto></MiComponenteConContexto> */}

      {/* Todo los que hay aquí, es tratado como props.children */}
      {/* <Ejemplo4 nombre="Federico">
          <h3>
            Contenido del props.children 
          </h3>
        </Ejemplo4> */}

      {/* <GreetingStyled name='Federico'></GreetingStyled> */}

      {/* Ejercicios Sesiones 4 5 6 */}
      {/* <Clock></Clock> */}
      {/* <ClockFuntional></ClockFuntional> */}

      {/* <AllCycles></AllCycles> */}

      {/* Ejemplo tutoria minuto 62 */}
      {/* <ComponenteEstado></ComponenteEstado> */}

      {/* Gestion de eventos */}
      {/* <Father></Father> */}

      {/* Ejercicios Sesiones 789 */}
      {/* <ContactListComponent></ContactListComponent> */}


      {/* Ejemplos de renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}

      {/* Ejercicios Sesiones 10-11-12 */}
      {/* <ChangingColor></ChangingColor> */}


      {/* Formik y YUP */}
      {/* <LoginFormik></LoginFormik> */}

      {/* Register with Formik */}
      {/* <RegisterFormik></RegisterFormik> */}

      {/* Ejercicios Sesiones 13-14-15 */}
      {/* <TaskListFormikComponent></TaskListFormikComponent> */}

      {/* Ejemplos de asincronia */}
      {/* <AsyncExample></AsyncExample> */}

      {/* Ejemplo de Observable */}
      {/* <ObservableExample></ObservableExample> */}

      {/* Ejemplos de Fetch */}
      {/* <FetchExample></FetchExample> */}

      {/* Ejemplo con Axios */}
      <AxiosExample></AxiosExample>

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
      {/* </header> */}
    </div>
  );
}

export default App;
