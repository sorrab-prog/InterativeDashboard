import React from 'react'

// Pages
import Login from '../pages/Login/Login'
import App from '../App'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = "/login" element={<Login />}/>
            <Route path = "/" element={<App/>}/>
            <Route path = "/onboarding-flow-control" element={<App/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router