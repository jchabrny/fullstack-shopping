import {createContext, useState} from "react";
import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Days from "./pages/Days";
import "./App.scss";
import axios from "axios";
import LoginPage from "./pages/LoginPage";
//import jwt;

const api = axios.create({
    baseURL: `http//localhost:3000/days/`
})

interface AuthContextType {
    token?: string,
    jwtDecoded?: { sub?: string }
    setJwt: (jwt: string) => void
}

export const AuthContext = createContext<AuthContextType>({
    setJwt: (data) => {
    }
})

export default function App() {
    const [token, setToken] = useState<string>()
    const [jwtDecoded, setJwtDecoded] = useState({})

    const setJwt = (jwt: string) => {
        setToken(jwt)
       // setJwtDecoded(jwt_decode(jwt.toString()))
        // install jwt decode in terminal
    }

    const [recipe, setRecipe] = useState("");

    return (
        <div className="App">
            <div className="container">
                <AuthContext.Provider value={{token, jwtDecoded, setJwt}}>
                <Routes>
                    <Route path={"/login"} element={<LoginPage/>}/>
                    <Route path="days/:dayId" element={<Days recipe={recipe}/>}/>
                    <Route
                        path="/"
                        element={<MainPage recipe={recipe} setRecipe={setRecipe}/>}
                    />
                </Routes>
                </AuthContext.Provider>
            </div>
        </div>
    );
}
