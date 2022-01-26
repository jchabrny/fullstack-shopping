import axios, {AxiosResponse} from "axios";
import {ShoppingList} from "../models/ShoppingList";

export const getAllLists = (token?: string) =>
    axios.get("/api/list/getAll", token ? {headers: {'Authorization': 'Bearer ' + token}} : {})
        .then(response => response.data)

export const saveNewList = (listName: ShoppingList, token?: string) =>
    axios.post("/api/list/saveNew", listName, token ? {headers: {'Authorization': 'Bearer ' + token}} : {})
        .then(response => response.data)

export const updateList = (updatedList: ShoppingList, token?: string) =>
    axios.patch(`/api/list/update`, updatedList, token ? {headers: {'Authorization': 'Bearer' + token}} : {})
        .then(response => response.data)

export const getListByName = (listId: string, token?: string) =>
    axios.get(`/api/list/getById/${listId}`, token ? {headers: {'Authorization': 'Bearer ' + token}} : {})
        .then(response => response.data)

export const deleteListById = (listId: string, token?: string) =>
    axios.delete(`/api/list/remove/${listId}`, token ? {headers: {'Authorization': 'Bearer ' + token}} : {})
        .then(response => response.data)

export const login = (userInput: { username: string, password: string }) =>
    axios.post("/auth/login/", userInput).then((response: AxiosResponse<string>) => response.data)

/*
export const getItem = (token?: string) =>
    axios.get("/list/addItem", token ? {headers: {'Authorization': 'Bearer' + token}} : {})
        .then(response => response.data)*/