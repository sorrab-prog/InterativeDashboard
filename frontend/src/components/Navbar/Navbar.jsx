import React from 'react'
import './Navbar.css'
import axiosInstanceLogin from '../../api/login'

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

// React-Icons Components
import { FiSettings } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";

// React-Router-DOM component to redirect user to another page
import { useNavigate } from "react-router-dom";

function NavBar() {
  // Navigate is declareted here because of the Rules of Hooks, see more on: https://reactjs.org/warnings/invalid-hook-call-warning.html
  let navigate = useNavigate()

  const [user, setUser] = React.useState([])

  React.useEffect(() => {
    axiosInstanceLogin.get('admin-auth-api/user/')
      .then((res) => {
        setUser(res.data)
    })
    .catch((error) => {
        if(error.response.data){
          if(error.response.data.detail === "Unauthenticated"){
            alert('Realize o log-in novamente')
            navigate('/login')
          }
          else if(error.response.data.detail === "Expired Token"){
            alert('Token expirado, realize o log-in novamente')
            navigate('/login')
          }
          else{
            alert('Algo deu errado, por gentileza, contate o administrador')
            navigate('/login')
          }
        }
        else{
          alert('Algo deu errado, por gentileza, contate o administrador')
          navigate('/login')
        }
    })
  }, [])

  function navigateTo(url){
    navigate('/' + url)
  }

  function logout(e){
    e.preventDefault()
    axiosInstanceLogin.post('admin-auth-api/logout/')
    .then((res) => {
      navigate('/login')
    })
    .catch((error) => {
      alert('Algo deu errado, por gentileza, contate o administrador')
    })
  }

  return (
    <Navbar className="nav">
        <Navbar.Brand href="/" style={{ fontSize: '1.8em'}}>Fitbank-Dashboard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Container className="navbar-buttons-container">
            <FiSettings onClick={e => navigateTo('config')}className="nav-buttons"/>
            <IoMdNotificationsOutline onClick={e => navigateTo('config')} className="nav-buttons"/>
            <Card className="profile-button">
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Link style={{ cursor: 'pointer' }} onClick={logout}>Sair</Card.Link>
              </Card.Body>
            </Card>
          </Container>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar