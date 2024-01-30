import React from "react";
import useInput from "../hooks/useInput";

function RegisterInput({register}){
    const [name, setName] = useInput()
    const [email, setEmail] = useInput()
    const [password, setPassword] = useInput()

    return(
        <form className="register-input">
            <input 
            type="text" 
            value={name} 
            onChange={setName}
            placeholder="Username"
            className="register-input__name" />
            <input 
            type="email" 
            value={email} 
            onChange={setEmail}
            placeholder="Email"
            className="register-input__email" />
            <input 
            type="password" 
            value={password} 
            onChange={setPassword}
            placeholder="Password"
            className="register-input__password" />
            <button 
            type="button" 
            className="register-input__btn" 
            onClick={()=> register({name, email, password})}
            >Register</button>
        </form>
    )
}

export default RegisterInput