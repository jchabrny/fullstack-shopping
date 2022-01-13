import { Link } from "react-router-dom";
import Recipe from "../components/Recipe";
import dalmatian from "../images/dalmatian.jpg";
import "./MainPage.scss";

type MainPageProps = {
  recipe: string;
  setRecipe: React.Dispatch<React.SetStateAction<string>>;
};

export default function MainPage(props: MainPageProps) {
  return (
    <div>
      <header className="App-header">
        <img src={dalmatian} className="Dalmatian img-fluid" alt="dalmatian" />
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
