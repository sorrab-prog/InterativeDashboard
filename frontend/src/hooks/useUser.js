import React from 'react'
import axiosInstanceLogin from '../api/login'
import { useNavigate } from "react-router-dom";

function getLogin(){
    // Navigate is declareted here because of the Rules of Hooks, see more on: https://reactjs.org/warnings/invalid-hook-call-warning.html
    let navigate = useNavigate()

    const [user, setUser] = React.useState({
        email: '',
        name: 'Artius',
        start_date: '',
        is_active: false
    })

    React.useEffect(() => {
        axiosInstanceLogin.get('admin-auth-api/user/')
        .then((res) => {
            setUser(res.data)
        })
        .catch((error) => {
            if(error.response.data){
                if(error.response.data.detail === "Unauthenticated"){
                    navigate('/login')
                }
                else if(error.response.data.detail === "Expired Token"){
                    alert('Token expirado, realize o log-in novamente')
                    navigate('/login')
                }
                else{
                    alert('Algo deu errado ao carregar dados do usuário')
                    navigate('/login')
                }
            }
            else{
                alert('Algo deu errado ao coletar dados do usuário')
                navigate('/login')
            }
        })
    }, [])
    return user
}

export default getLogin