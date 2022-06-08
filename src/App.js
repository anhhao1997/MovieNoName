import logo from "./logo.svg";
import "./App.css";
import { createBrowserHistory } from "history";
import Home from "./pages/Home/Home";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Detail from "./pages/Detail/Detail";

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path="/" Component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
