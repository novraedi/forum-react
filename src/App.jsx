import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPreloadProcess } from "./states/isPreload/action";
import { Routes, Route } from "react-router";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App(){
    const {authUser, isPreload} = useSelector((states)=> states)
    const dispatch = useDispatch()

    React.useEffect(()=> {
        dispatch(asyncPreloadProcess())
    }, [dispatch])

    if(isPreload){
        return null
    }

    if(authUser === null){
        return (
            <main>
                <Routes>
                    <Route path="/*" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </main>
        )
    }

    return (
        <main>
            
        </main>
    )
}

export default App