import {AxiosResponse} from "axios";

const axios = require ('axios').default;

const userData = {username: "", authToken: ""}

export const getUserData = () => ({...userData})

export const isLoggedIn = () => userData.authToken !== "";

export const logOut = () => (userData.username = "") && (userData.authToken ="")

const getConfig = () => ({header: {'Authorization': 'Bearer ' + getUserData().authToken}})


export const hello = () => axios.get("/auth/", getConfig()).then((response: AxiosResponse) => response.data)



/*export const register = (userInput: {username: String, password: String}) =>
    axios.post("/auth/register/", userInput).then((response: AxiosResponse) => response.data)*/