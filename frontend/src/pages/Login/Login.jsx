import React from 'react'
import './Login.css'

// Bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axiosInstance from '../../api/axios'

// React-Router-DOM component to redirect user to another page
import { useNavigate } from "react-router-dom";

function Login() {

    // Navigate is declareted here because of the Rules of Hooks, see more on: https://reactjs.org/warnings/invalid-hook-call-warning.html
    let navigate = useNavigate();

    React.useEffect(() => {

        // This function will try to get user informations through the get method on the serverside API, if get something, redirect user directly to the homepage, that indicates that the user is still logged in

        axiosInstance.get('admin-auth-api/user/')
            .then((res) => {
                navigate('/')
        })
        .catch((error) => {
            if(error.response.data){
                if(error.response.data.detail === "Unauthenticated"){
                    // Remains on the page
                }
                else if(error.response.data.detail === "Expired Token"){
                    alert('Token expirado, realize o log-in novamente')
                }
                else{
                    alert('Algo deu errado, por gentileza, contate o administrador')
                }
            }
            else{
                alert('Algo deu errado, por gentileza, contate o administrador')
            }
        })
    }, [])

    const handleSubmit = ((e) => {
        e.preventDefault()
        var username = document.getElementById('form-username')
        var password = document.getElementById('form-password')

        axiosInstance.post(`admin-auth-api/login/`, {
            username: username.value,
            password: password.value,
        })
        .then((res) => {
            navigate('/')
        }).catch((error) => {
            console.log(error)
            if(error.response.data){
                if(error.response.data.detail === "Usuário não encontrado"){
                    alert('Usuário não encontrado')
                    username.value = ""
                    password.value = ""
                }
                else if(error.response.data.detail === "Senha Incorreta"){
                    alert('Senha Incorreta')
                    username.value = ""
                    password.value = ""
                }
                else{
                    alert('Algo deu errado, por gentileza, contate o administrador')
                    username.value = ""
                    password.value = ""
                }
            }
            else{
                alert('Algo deu errado, por gentileza, contate o administrador')
                username.value = ""
                password.value = ""
            }
        })
    })

  return (
    <div className="login-page">
         <Form className="form-card" onSubmit = {handleSubmit}>
            <h1>FitBank Dashboard</h1>
            <Form.Group className="mb-3" controlId="form-username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form-password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>
            <Button variant="primary" type='submit' className="login-button">
                Log-in
            </Button>
        </Form>
    </div>
  )
}

export default Login