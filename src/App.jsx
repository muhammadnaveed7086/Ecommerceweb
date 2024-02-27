import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Categories from "./Categories";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Route, Routes, Switch } from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import Chat from "./Chat";
import ViewProduct from "./ViewProduct";
import AddCart from "./AddCart";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="category" Component={Categories} />
        <Route path="contact" Component={Contact} />
        <Route path="about" Component={About} />
        <Route path="login" Component={Login} />
        <Route path="signup" Component={Signup} />
        <Route path="chat" Component={Chat} />
        <Route path="viewproduct" Component={ViewProduct} />
        <Route path="addcart" Component={AddCart} />
      </Routes>
      
      <Footer />
    </>
  );
};
export default App;
