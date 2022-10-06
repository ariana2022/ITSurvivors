import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layaut from "./containers/Layaut";
import { Cows } from "./pages/Cows";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Tambo from "./pages/Tambo";
import "./styles/Globals.css";

function App() {
  return (
    <BrowserRouter>
      <Layaut>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/create-account" element={<CreateAccount />} />
          <Route exact path="/tambo" element={<Tambo />} />
          <Route exact path="/cows" element={<Cows />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Layaut>
    </BrowserRouter>
  );
}

export default App;
