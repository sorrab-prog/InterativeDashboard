import React from 'react'
import axiosInstance from '../api/axios'

// React-Router-DOM component to redirect user to another page
import { useNavigate } from "react-router-dom";

function fetchUser() {
    // Navigate is declareted here because of the Rules of Hooks, see more on: https://reactjs.org/warnings/invalid-hook-call-warning.html
    let navigate = useNavigate()

    const [user, setUser] = React.useState([])

    React.useEffect(() => {
      axiosInstance.get('admin-auth-api/user/')
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
    }, [navigate])

  return user
}

export default fetchUser