import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import HomePage from './HomePage';
import ListPage from './ListPage';
import CreatePage from './CreatePage';
import UpdatePage from './UpdatePage';
import { logout } from './services/Fetch-utils';

export default function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));
  
  return (
    <Router>
      <div>
        {
          currentUser &&
          <ul>
            <li>
              <Link to="/list">List Page</Link>
            </li>
            <li>
              <Link to="/create">Create Page</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        }
        <Switch>
          <Route exact path="/">
            {
              currentUser
                ? <Redirect to="list"/>
                : <HomePage setCurrentUser={setCurrentUser} />
            }
          </Route>
          <Route exact path="/list">
            {
              !currentUser
                ? <Redirect to="/"/>
                : <ListPage />
            }
          </Route>
          <Route exact path="/create">
            {
              !currentUser
                ? <Redirect to="/"/>
                : <CreatePage />
            }
          </Route>
          <Route exact path="/edit/:id">
            {
              !currentUser 
                ? <Redirect to="/"/>
                : <UpdatePage />
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}