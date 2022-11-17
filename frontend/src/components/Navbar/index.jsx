import React from 'react'
import './styles.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import getLogin from '../../hooks/useUser'
import { useNavigate } from "react-router-dom";
import axiosInstanceLogin from '../../api/login'

function NavBar() {
  // Navigate is declareted here because of the Rules of Hooks, see more on: https://reactjs.org/warnings/invalid-hook-call-warning.html
  let navigate = useNavigate()

  const user =getLogin()

  function logout(e){
    e.preventDefault()
    axiosInstanceLogin.post('admin-auth-api/logout/')
    .then((res) => {
      navigate('/login')
    })
    .catch((error) => {
      alert('Algo deu errado ao tentar realizar o logout')
    })
  }

  return (
    <Navbar className="nav">
        <Navbar.Brand href="/" style={{ fontSize: '1.8em'}}>Fitbank-Dashboard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Container className="navbar-buttons-container">
            <Card style={{ width: '15rem' }}>
              <Card.Body>
                <Card.Title style = {{ fontSize:'1.4em', color:'#000000' }}>{user.name === '' ? "Nome não cadastrado" : user.name}</Card.Title>
                <Card.Link style={{ cursor: 'pointer' }} onClick ={logout}>Sair</Card.Link>
              </Card.Body>
            </Card>
          </Container>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar