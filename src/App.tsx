import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Dashboard from './pages/admin';
import Properties from './pages/admin/properties';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/admin/dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/admin/properties'>
          <Properties />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
