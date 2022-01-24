import axios, {AxiosResponse} from "axios";
import {getUserData} from "./LoginService";

//const axios = require('axios').default;

const getConfig = () => ({headers: {'Authorization': 'Bearer ' + getUserData().authToken}})

export const getAllLists = () =>
    axios.get("/api/list/", getConfig()).then((response: AxiosResponse) => response.data)

export const getListById = (id: string) =>
    axios.get(`/api/list/${id}`, getConfig()).then((response: AxiosResponse) => response.data)

export const addNewList = (newList: {}) =>
    axios.post("/api/list/", getConfig()).then((response: AxiosResponse) => response.data)

export const changeListName = (newList: {}) =>
    axios.put("/api/list/", getConfig()).then((response: AxiosResponse) => response.data)

export const deleteList = (id: string) =>
    axios.delete(`/api/list/${id}`, getConfig()).then(console.log)

export const login = (userInput: {username: string, password: string}) =>
    axios.post("/auth/login/", userInput).then((response: AxiosResponse<string>) => response.data)

