import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Days from "./pages/Days";
import "./App.scss";

export default function App() {
  const [recipe, setRecipe] = useState("");

  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="days/:dayId" element={<Days recipe={recipe} />} />
          <Route
            path="/"
            element={<MainPage recipe={recipe} setRecipe={setRecipe} />}
          />
        </Routes>
      </div>
    </div>
  );
}
