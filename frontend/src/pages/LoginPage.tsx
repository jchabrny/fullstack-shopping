import {ChangeEvent, FormEvent, useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../context/AuthProvider";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {

    const [name, setName] = useState<string>()
    const [password, setPassword] = useState<string>()

    const navigate = useNavigate()

    const {setJwt} = useContext(AuthContext)

    const onUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios.post('/auth/login', {name, password})
            .then(response => response.data)
            .then((data) => {
                setJwt(data)
                navigate('/')
            })
            .catch((error) => console.error(error.message))
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="username" onChange={onUserNameChange} value={name}/>
                <input type="password" placeholder="password" onChange={onPasswordChange} value={password}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}


