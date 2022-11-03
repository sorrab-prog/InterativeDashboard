import React from 'react'
import './App.css'

// Personal Components
import SideBar from './components/Sidebar/SideBar'
import Navbar from './components/Navbar/Navbar'

// Bootstrap Components
import ThemeProvider from 'react-bootstrap/ThemeProvider'

// Fetch clients to the profile page
import axiosInstanceOnboarding from './api/onboarding'

// Personal Pages
import Home from './pages/Home/Home'
import FlowControl from './pages/Onboarding/FlowControl/FlowControl'
import ApprovedClients from './pages/Onboarding/ApprovedClients/ApprovedClients'
import RejectedClients from './pages/Onboarding/RejectedClients/RejectedClients'
import AnalysisClients from './pages/Onboarding/AnalysisClients/AnalysisClients'
import ClientProfile from './pages/Profile/Client/ClientProfile'

// React-Router-DOM component to redirect user to another page
import { useNavigate } from "react-router-dom";

function App() {
  // Navigate is declareted here because of the Rules of Hooks, see more on: https://reactjs.org/warnings/invalid-hook-call-warning.html
  let navigate = useNavigate();

  const [clients, setClients] = React.useState([[]])

  var actual_url = window.location.pathname

  React.useEffect(() => {
    axiosInstanceOnboarding.get('process/')
    .then((res) => {
      setClients(res.data.items)
    })
    .catch((error) => {
      alert('Algo deu errado ao coletar clientes para mapear os seus perfis')
      navigate('/')
    })
  }, [])

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
            {clients.map((client) => (
              actual_url === '/client-profile/' + client.id ? <ClientProfile/> : null
            ))}
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App