import React from 'react'
import './Navbar.css'

//Images/Icons
import notification_icon from './img/notification-icon.png'
import settings_icon from './img/settings_icon.png'

// Hook for fetch user
import fetchUser from '../../hooks/fetchUser'

function NavBar() {
  fetchUser()

  return (
    <nav>
        <div className="nav-icons">
            <img src={notification_icon} alt=""/>
            <img src={settings_icon} alt=""/>
        </div>
        <div className="profile-card">
            {/* <h3>{user.name}</h3>
            <p>{user.role}</p> */}
        </div>
    </nav>
  )
}

export default NavBar