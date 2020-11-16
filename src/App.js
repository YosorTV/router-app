import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Header from './components/header/header';
import Albums from './components/albums/Albums';
import Users from './components/users/Users';
import './App.scss';

function App() {
  return (
    <Router>
      <Header/>
      <div className="App">
      <Switch>
        <Route path="/albums">
          <Albums/>
        </Route>
        <Route path="/users">
          <Users/>
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
