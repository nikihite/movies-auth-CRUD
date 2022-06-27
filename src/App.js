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
import { client } from './services/client';

export default function App() {
  const [user, setUser] = useState(client.auth.user());
  
  async function handleLogoutClick() {
    await logout();
    setUser('');
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Sign In</Link>
            </li>
            <li>
              <Link to="/create">Create New Movie</Link>
            </li>
            <li>
              <Link to="/movies/1">Update a Movie</Link>
            </li>
            <li>
              <Link to="/movies">List of Your Movies</Link>
            </li>
            <li>
              {user && 
            <button onClick={handleLogoutClick}>Logout</button>}
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            {
              !user
                ? <HomePage setUser={setUser} />
                : <Redirect to="/movies" />
            }
          </Route>
          <Route exact path="/movies/:id">
            <UpdatePage />
          </Route>
          <Route exact path="/movies">
            {
              user 
                ? <ListPage /> 
                : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/create">
            <CreatePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}