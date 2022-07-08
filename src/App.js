import logo from "./logo.svg";
import "./App.css";
import { createBrowserHistory } from "history";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
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
import Films from "./pages/Admin/Films/Films";
import ShowTime from "./pages/Admin/ShowTime/ShowTime";
import AddFilms from "./pages/Admin/Films/AddFilms/AddFilms";

// const CheckoutTemplateLazy = lazy(() => import("./templates/CheckoutTemplate/CheckoutTemplate"))
import Manager from "./pages/Admin/Manager/Manager";
import EditFilm from './pages/Admin/Films/EditFilm/EditFilm';

export const history = createBrowserHistory();

function App() {
  return (
    <Router Router history={history}>
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
        <AdminTemplate path="/admin" exact Component={Manager} />
        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/manager" exact Component={Manager} />
        <AdminTemplate path="/admin/showtime" exact Component={ShowTime} />
        <AdminTemplate path="/admin/films/addfilms" exact Component={AddFilms} />
        <AdminTemplate path="/admin/films/editfilm/:id" exact Component={EditFilm} />
        <AdminTemplate path="/admin/films/showtime/:id" exact Component={ShowTime} />
        <HomeTemplate path="/" Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
