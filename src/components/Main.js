import React from "react";
import Jumbotron from "../components/Jumbotron"
import ProductSection from "./ProductSection";

function Main() {
  return (
    <main className="main">
        <p>Main section</p>
      <Jumbotron />
      <ProductSection />
    </main>
  );
}

export default Main;