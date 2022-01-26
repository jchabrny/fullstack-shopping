import React from "react";
import GroceryListsGallery from "./GroceryListsGallery";
import "./StandardDay.scss";
import burger from "../images/burger.jpg";
import fridge from "../images/fridge.jpg";

type StandardDayProps = {
    recipe: string;
};

export default function StandardDay(props: StandardDayProps) {

    /*if (!lists) {
        return <h2>Loading ...</h2>
    }*/

    return (
        <div>
            <p>Recipe:</p>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div>
                            <img src={burger} className="Burger img-fluid" alt="burger"/>
                            <h3>{props.recipe}</h3>
                            <h4>Ingredients: 🍅 🧅 🍞 🐄 🥗</h4>
                            <br/>
                            <p>Fridge Contents:</p>
                            <img src={fridge} className="Fridge img-fluid" alt="fridge"/>
                            <br/>
                            <p>Needed:</p>
                            <GroceryListsGallery lists={[]}/>
                            <p>Who goes voluntarily to market?</p>
                            <div className="volunteer">
                                <button type="button" className="btn btn-dark btn-sm">
                                    ME ?
                                </button>
                                {" "}
                                <button type="button" className="btn btn-dark btn-sm">
                                    NOT ME (AGAIN)
                                </button>
                            </div>
                            <br/>
                            <p>💰 Average weekly expenses</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer>🛒 This project was coded by Jacky</footer>
        </div>
    );
}
