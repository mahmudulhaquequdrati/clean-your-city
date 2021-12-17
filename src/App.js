import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/Authentication/PrivateRoute/PrivateRoute";
import Dashboard from "./components/DashBoard/Dashboard";
import MyOrders from "./components/DashBoard/MyOrders/MyOrders";
import About from "./components/Home/AboutUs/About/About";
import ContactForm from "./components/Home/Contact/ContactForm/ContactForm";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Services/Services";
import Login from "./components/Shared/Login/Login";
import Register from "./components/Shared/Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/browseServices">
              <Services />
            </PrivateRoute>
            <Route path="/contact">
              <ContactForm />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders />
            </PrivateRoute>
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
