import "./style/main.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route index element={<HomePage />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
