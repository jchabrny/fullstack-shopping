import {ChangeEvent, FormEvent, useContext, useState} from "react";
import {AuthContext} from "../context/AuthProvider";
import {useNavigate} from "react-router-dom";
import {login} from "../services/BackendService";

export default function LoginPage() {

    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

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
        login({ username: name, password: password })
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


