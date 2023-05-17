import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Contact from "./Pages/Contact";
import Inventory from "./Pages/Inventory";
import Shops from "./Pages/Shops";
import AuthProvider from "./Auth/AuthProvider";

function App() {
  return (
    <div>
        <BrowserRouter>
      <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Shops />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
      </AuthProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
