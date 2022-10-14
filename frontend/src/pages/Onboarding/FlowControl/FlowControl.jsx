import React from 'react'
import './FlowControl.css'
import axiosInstance from '../../../components/Axios/AxiosInstance'

// Personal Components
import SideNav from '../../../components/SideNav/SideNav'
import NavBar from '../../../components/Navbar/Navbar'

// React-Router-DOM component to redirect user to another page
import { useNavigate } from "react-router-dom";

import { AiOutlineReload } from "react-icons/ai";

function FlowControl() {
  // Navigate is declareted here because of the Rules of Hooks, see more on: https://reactjs.org/warnings/invalid-hook-call-warning.html
  let navigate = useNavigate();

  const [clients, setClient] = React.useState([])

  // Get User Infos
  React.useEffect(() => {
    axiosInstance.get('onboarding-api/onboarding-flow/')
      .then((res) => {
        setClient(res.data)
    })
    .catch((error) => {
        if(error.response.data){
          if(error.response.data.detail === "Unauthenticated"){
            alert('Realize o log-in novamente')
            navigate('/')
          }
          else if(error.response.data.detail === "Expired Token"){
            alert('Token expirado, realize o log-in novamente')
            navigate('/')
          }
          else{
            alert('Algo deu errado, por gentileza, contate o administrador')
            navigate('/')
          }
        }
        else{
          alert('Algo deu errado, por gentileza, contate o administrador')
          navigate('/')
        }
    })
  }, [navigate])

  function reloadClient(){
    axiosInstance.get('onboarding-api/onboarding-flow/')
      .then((res) => {
        setClient(res.data)
    })
    .catch((error) => {
        if(error.response.data){
          if(error.response.data.detail === "Unauthenticated"){
            alert('Realize o log-in novamente')
            navigate('/')
          }
          else if(error.response.data.detail === "Expired Token"){
            alert('Token expirado, realize o log-in novamente')
            navigate('/')
          }
          else{
            alert('Algo deu errado, por gentileza, contate o administrador')
            navigate('/')
          }
        }
        else{
          alert('Algo deu errado, por gentileza, contate o administrador')
          navigate('/')
        }
    })
  }

  return (
    <div className="pages">
      <SideNav/>
      <div className="dashboard-page">
        <NavBar/>
        <div className="onboarding-flow-container">
          <h1>Controle de Fluxo - Clientes</h1>
          <button className="reload-button" onClick={reloadClient}><AiOutlineReload/> Atualizar</button>
          <div className="onboarding-flow-control-card">
            <div className="onboarding-flow-col">
              <h2>Nome do cliente</h2>
              {clients.map((client) => <a href={"/onboarding-flow/" + client.name} className="client-name">{client.name}</a>)}
            </div>
            <div className="onboarding-flow-col">
              <h2>Dados Iniciais</h2>
              {clients.map((client) => 
              {if(client.initial_data_complete_check === true){
                return <label className="onboarding-status-complete">Completo</label>
              }else if(client.initial_data_error === true){
                return <label className="error-status">Erro</label>
              }else{
                return <label className="onboarding-status-incomplete">Incompleto</label>
              }
              })}
            </div>
            <div className="onboarding-flow-col">
              <h2>Documentos</h2>
              {clients.map((client) => 
              {if(client.documents_complete_check === true){
                return <label className="onboarding-status-complete">Completo</label>
              }else if(client.documents_error === true){
                return <label className="error-status">Erro</label>
              }else{
                return <label className="onboarding-status-incomplete">Incompleto</label>
              }
              })}
            </div>
            <div className="onboarding-flow-col">
              <h2>Obrigações Fiscais</h2>
              {clients.map((client) => 
              {if(client.fiscal_obligations_complete_check === true){
                return <label className="onboarding-status-complete">Completo</label>
              }else if(client.fiscal_obligations_error === true){
                return <label className="error-status">Erro</label>
              }else{
                return <label className="onboarding-status-incomplete">Incompleto</label>
              }
              })}
            </div>
            <div className="onboarding-flow-col">
              <h2>Onboarding Completo</h2>
              {clients.map((client) => 
              {if(client.onboarding_complete_check === true){
                return <label className="onboarding-status-complete">Completo</label>
              }else if(client.terms_and_conditions_error === true){
                return <label className="error-status">Erro</label>
              }else{
                return <label className="onboarding-status-incomplete">Incompleto</label>
              }
              })}
            </div>
            <div className="onboarding-flow-col">
              <h2>Dados Opcionais</h2>
              {clients.map((client) => {if(client.email === null){
                return <label className="onboarding-status-incomplete">Não preenchido</label>
              }else{
                return <label className="onboarding-status-complete">Preenchido</label>
              }})}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlowControl