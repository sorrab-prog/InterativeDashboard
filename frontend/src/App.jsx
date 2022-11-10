import React from 'react'
import './App.css'
import SideBar from './components/Sidebar/index'
import Navbar from './components/Navbar/index'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Home from './pages/Home/index'
import FlowControl from './pages/Onboarding/FlowControl/index'
import ApprovedClients from './pages/Onboarding/ApprovedClients/index'
import RejectedClients from './pages/Onboarding/RejectedClients/index'
import AnalysisClients from './pages/Onboarding/AnalysisClients/index'
import ClientProfile from './pages/Profile/Client/index'
import ErrorProfile from './pages/Profile/Error/index'
import ErrorLog from './pages/Onboarding/ErrorLog/index'
import getClients from './hooks/useOnboardingClients'
import errors from './hooks/useErrors'

function App() {
  
  const clients = getClients()

  var actual_url = window.location.pathname

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="app">
          <SideBar/>
          <Navbar/>
          <div className="pages">
            {actual_url === '/' ? <Home/> : null}
            {actual_url === '/onboarding-flow-control'? <FlowControl/> : null}
            {actual_url === '/onboarding-approved-clients'? <ApprovedClients/> : null}
            {actual_url === '/onboarding-rejected-clients'? <RejectedClients/> : null}
            {actual_url === '/onboarding-analysis-clients'? <AnalysisClients/> : null}
            {actual_url === '/onboarding-error-logs'? <ErrorLog/> : null}
            {clients.map((client) => (
              actual_url === '/client-profile/' + client.id ? <ClientProfile/> : null
            ))}
            {errors.map((error) => (
              actual_url === '/error-profile/' + error.id ? <ErrorProfile/> : null
            ))}
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App