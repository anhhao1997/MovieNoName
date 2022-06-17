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
import { Suspense, lazy } from "react";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import Register from "./pages/Register/Register";
import Loading from "./components/Loading/Loading";
import Profile from "./pages/Profile/Profile";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import DashBoard from "./pages/Admin/Dashboard/DashBoard";
import Films from "./pages/Admin/Films/Films";
import ShowTime from "./pages/Admin/ShowTime/ShowTime";

// const CheckoutTemplateLazy = lazy(() => import("./templates/CheckoutTemplate/CheckoutTemplate"))

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path="/home" Component={Home} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />

        {/* <Route path="/login" exact component={Login} /> */}
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={Profile} />

        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />

        <UserTemplate path="/login" exact Component={Login} />

        {/* <Suspense fallback={<h1>LOADING...</h1>}>
          <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout} />
        </Suspense> */}
        <AdminTemplate path="/admin" exact Component={DashBoard} />
        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/users" exact Component={DashBoard} />
        <AdminTemplate path="/admin/showtime" exact Component={ShowTime} />

        <HomeTemplate path="/" Component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
