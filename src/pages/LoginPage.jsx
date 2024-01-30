import React, { useDebugValue } from "react";
import {IoEarthOutline} from 'react-icons/io5'
import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../states/authUser/action";

function LoginPage(){
    const dispatch = useDispatch()

    const onLogin = ({email, password}) => {
        dispatch(asyncSetAuthUser({email, password}))
    }

    return (
        <section className="login-page">
            <div className="login-page__hero">
            <IoEarthOutline />
            </div>
            <div className="login-page__main">
                <h2>Login</h2>
                <LoginInput login={onLogin} />
                <p>Dont have an account? <Link to="/register">Register</Link></p>
            </div>
        </section>
    )
}

export default LoginPage