import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import DashBoardPage from './pages/dashboard/DashBoardPage';
import LoginPage from './pages/auth/LoginPage';
import Notfoundpage from './pages/404/NotFoundPage'

function AppRoutingFinal() {

  // ToDo Change to value from sessionStorage (or something dinamic)
  let loggedIn = true;

  return (
    <div>
      <Router>

        <div>
          {/* <aside>
            <Link to='/'> | Dashboard | </Link>
          </aside> */}

          <main>


            <Routes>

              <Route exact path='/' element={loggedIn ? (<Navigate to='/dashboard' />) : <Navigate to='/login' />} />

              <Route exact path='/login' Component={LoginPage} />
              <Route exact path='/dashboard' element={ loggedIn ? <DashBoardPage></DashBoardPage> : <LoginPage></LoginPage>} />


              <Route path='*' Component={Notfoundpage} />
            </Routes>


          </main>
        </div>

      </Router>
    </div>
  );
}

export default AppRoutingFinal;
