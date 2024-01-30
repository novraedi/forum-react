import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { asyncRegisterUser } from "../states/users/action";
import RegisterInput from "../components/RegisterInput";
import {IoEarthOutline} from 'react-icons/io5'
import { Link } from "react-router-dom";

function RegisterPage(){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onRegister = ({name, email, password}) => {
        dispatch(asyncRegisterUser({name, email, password}))
        navigate('/login')
    }

    return (
        <section className="register-page">
            <div className="register-page__hero">
                <IoEarthOutline />
            </div>
            <div className="register-page__main">    
                <h2>Create your account</h2>
                <RegisterInput register={onRegister} />
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </section>
    )
}

export default RegisterPage