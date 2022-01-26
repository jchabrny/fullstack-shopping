import { Link } from "react-router-dom";
import Recipe from "../components/Recipe";
import dalmatian from "../images/dalmatian.jpg";
import "./MainPage.scss";
import React, {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";

type MainPageProps = {
  recipe: string;
  setRecipe: React.Dispatch<React.SetStateAction<string>>;
};

export default function MainPage(props: MainPageProps) {

    const {token, jwtDecoded} = useContext(AuthContext)

  return (
    <div>
      <header className="App-header">
        <img src={dalmatian} className="Dalmatian img-fluid" alt="dalmatian" />
        <br />
          <h2>Hallo {jwtDecoded?.sub}</h2>
          <br />
        <h1>Weekly Grocery List</h1>
        <br />
        <Recipe recipe={props.recipe} setRecipe={props.setRecipe} />
        <br />
      </header>
      <nav className="Navbar">
        <Link to="/days/Monday">MON</Link>
        <Link to="/days/Tuesday">TUE</Link>
        <Link to="/days/Wednesday">WED</Link>
        <Link to="/days/Thursday">THU</Link>
        <Link to="/days/Friday">FRI</Link>
      </nav>
      <br />
      <footer>🛒 This project was coded by Jacky</footer>
    </div>
  );
}
