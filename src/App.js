import logo from "./logo.svg";
import "./App.css";
import { createBrowserHistory } from "history";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Detail from "./pages/Detail/Detail";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import { Suspense,lazy } from "react";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";

// const CheckoutTemplateLazy = lazy(()=>import("./templates/CheckoutTemplate/CheckoutTemplate"))

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <HomeTemplate path="/home" Component={Home} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />

        {/* <Route path="/login" exact component={Login}/> */}
        
        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />
        <UserTemplate path="/login" exact Component={Login}/>
        
        {/* <Suspense fallback={<h1>LOADING...</h1>}>
        <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout} />
        </Suspense> */}


        <HomeTemplate path="/" Component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
