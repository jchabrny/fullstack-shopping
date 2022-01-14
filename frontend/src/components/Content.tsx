import Needed from "./Needed";
import "./Content.scss";
import burger from "../images/burger.jpg";
import fridge from "../images/fridge.jpg";

type ContentProps = {
  recipe: string;
};

export default function Content(props: ContentProps) {
  return (
    <div>
      <img src={burger} className="Burger img-fluid" alt="burger" />
      <h3>{props.recipe}</h3>
      <h4>Ingredients: 🍅 🧅 🍞 🐄 🥗</h4>
      <br />
      <p>Fridge Contents:</p>
      <img src={fridge} className="Fridge img-fluid" alt="fridge" />
      <br />
      <p>Needed:</p>
      <Needed />
      <p>Who goes voluntarily to market?</p>
      <div className="volunteer">
        <button type="button" className="btn btn-dark btn-sm">
          ME ?
        </button>{" "}
        <button type="button" className="btn btn-dark btn-sm">
          NOT ME (AGAIN)
        </button>
      </div>
      <br />
      <p>💰 Average weekly expenses</p>
    </div>
  );
}
