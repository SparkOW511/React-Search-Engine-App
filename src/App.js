import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { InputContext } from "./context/inputContext";

function App() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    navigate("/search");
  };

  return (
    <div className="App">
      <InputContext.Provider value={{ input, setInput, search }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </InputContext.Provider>
    </div>
  );
}

export default App;
