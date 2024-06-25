import React from "react";
import Navbar from "../features/Navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

function Home() {
  return (
    <div>
      <Navbar>
        <ProductList /> 
      </Navbar>
    </div>
  );
}

export default Home;
