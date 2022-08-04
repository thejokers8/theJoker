import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
// import PaymentResponse from "./pages/response";
import Contact from "./pages/contact";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Cart from "./pages/cart";

function App() {
  return (
    <Router basename="/theJokerCompany">
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <Switch className="text-green-300">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          {/* <Route path="/cart">
            <Cart />
          </Route> */}
          {/* <Route path="/paymentResponse">
            <PaymentResponse />
          </Route> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
