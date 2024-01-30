import React from "react";
import useInput from "../hooks/useInput";

function LoginInput({login}){
    const [email, setEmail] = useInput()
    const [password, setPassword] = useInput()

    return(
        <form className="login-input">
            <input 
            type="email" 
            value={email} 
            onChange={setEmail}
            placeholder="Email"
            className="login-input__email" />
            <input 
            type="password" 
            value={password} 
            onChange={setPassword}
            placeholder="Password"
            className="login-input__password" />
            <button 
            type="button" 
            className="login-input__btn" 
            onClick={()=> login({email, password})}
            >Login</button>
        </form>
    )
}

export default LoginInput