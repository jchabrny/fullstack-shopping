import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Days from "./pages/Days";
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./context/AuthProvider";
import "./App.scss";

export default function App() {


const [recipe, setRecipe] = useState("");

return (
    <div className="App">
        <div className="container">
            <AuthProvider>
                <Routes>
                    <Route path={"/login"} element={<LoginPage/>}/>
                    <Route path="days/:dayId" element={<Days recipe={recipe}/>}/>
                    <Route
                        path="/"
                        element={<MainPage recipe={recipe} setRecipe={setRecipe}/>}
                    />
                </Routes>
            </AuthProvider>
        </div>
    </div>
);
}
