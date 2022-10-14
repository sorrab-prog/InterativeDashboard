import React from 'react'
import './App.css'

// Personal Components
import SideBar from './components/Sidebar/SideBar'
import Navbar from './components/Navbar/Navbar'

// Bootstrap Components
import ThemeProvider from 'react-bootstrap/ThemeProvider'

// Personal Pages
import Home from './pages/Home/Home'
import FlowControl from './pages/Onboarding/FlowControl/FlowControl'

function App() {

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
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App