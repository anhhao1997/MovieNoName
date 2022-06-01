import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from 'history'
import Home from './pages/Home/Home';
import { BrowserRouter, Switch, } from "react-router-dom";
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';

export const history = createBrowserHistory();

function App() {

  return (

    <BrowserRouter history={history}>

      <Switch>

        <HomeTemplate path='/' exact Component={Home} />

      </Switch>

    </BrowserRouter>

  );
}

export default App;
