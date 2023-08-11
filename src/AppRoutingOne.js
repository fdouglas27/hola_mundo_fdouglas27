import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import HomePage from './pages/home/HomePage'
import Notfoundpage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskFormikPage from './pages/tasks/TaskFormikPage';
import TasksDetailsPage from './pages/tasks/TasksDetailsPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {

  const loggedIn = localStorage.setItem('credentials',1);
  // const loggedIn = false;

  return (
    <div className="App">
      <Router>

        <div>
          <aside>
            <Link to='/'> | HOME | </Link>
            <Link to='/about'> | ABOUT | </Link>
            <Link to='/faqs'> | FAQs | </Link>
            <Link to='/profile'> | Profile | </Link>
            <Link to='/tasks'> | Tasks | </Link>
            <Link to='/tasks/:id'> | Tasks Details | </Link>
            <Link to='/*'> | Not existing route  | </Link>
          </aside>

          <main>
            <Routes>
              <Route path='/login' Component={ LoginPage } />

              <Route exact path='/online-state' Component={ StatePage } />

              <Route exact path='/' Component={ HomePage } />
              <Route path='/about' Component={ AboutPage } />
              <Route path='/faqs' Component={ AboutPage } />
              <Route path='/profile' 
              element={loggedIn ? (<ProfilePage></ProfilePage>) :
                (<Navigate replace to={"/login"} />)
              } 

              />

              <Route path='/tasks' Component={ TaskFormikPage } />
              <Route path='/tasks/:id' Component={ TasksDetailsPage } />

              {/* 404 - Page not found */}
              <Route path='*' Component={ Notfoundpage } />

            </Routes>


          </main>
        </div>

      </Router>

    </div>
  );
}

export default AppRoutingOne;
