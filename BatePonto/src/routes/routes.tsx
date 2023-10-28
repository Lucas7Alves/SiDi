import App from "../App"
import Login from "../pages/Login"
import { Suspense } from 'react'
import { CircularProgress } from "@mui/material";
import {Route, BrowserRouter, Routes as Switch } from "react-router-dom"

function Routes() {
    return(
    <BrowserRouter>
        <Suspense fallback={<CircularProgress/>}>
            <Switch>
                <Route path={"/"} element={<App />} />
                <Route path={"/login"} element={<Login />} />
            </Switch>
        </Suspense>
    </BrowserRouter>
    )

}

export default Routes