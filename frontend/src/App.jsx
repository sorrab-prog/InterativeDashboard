import React from 'react'
import './App.css'

// Personal Components
import SideBar from './components/Sidebar/SideBar'
// import Navbar from './components/Navbar/Navbar'

// Bootstrap Components
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="app">
          <SideBar/>
          {/* <Navbar/> */}
      </div>
    </ThemeProvider>
  )
}

export default App