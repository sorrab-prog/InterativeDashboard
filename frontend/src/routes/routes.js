import React from 'react'

// Pages
import Login from '../pages/Login/index'
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
            <Route path = "/onboarding-approved-clients" element={<App/>}/>
            <Route path = "/onboarding-rejected-clients" element={<App/>}/>
            <Route path = "/onboarding-analysis-clients" element={<App/>}/>
            <Route path = "/onboarding-error-logs" element={<App/>}/>
            <Route path= {'/client-profile/:id'} element={<App/>}/>
            <Route path= {'/error-profile/:id'} element={<App/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router