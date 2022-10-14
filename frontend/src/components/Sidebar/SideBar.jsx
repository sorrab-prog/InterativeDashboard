import React from 'react'
import './SideBar.css'
import logo from '../../assets/img/logo.png'

// Bootstrap Components
import Stack from 'react-bootstrap/Stack';

// React-Icons Components
import { BsFillPersonCheckFill, BsFillPersonXFill, BsExclamationTriangleFill, BsFillPersonLinesFill, BsBezier } from "react-icons/bs";

function SideBar() {
  return (
    <Stack direction="vertical" gap={1} className="sidebar">
        <img src={logo} alt="Fitbank-Dashboard"/>
        <Stack direction="vertical" gap={3} className="content-container">
          <h2>Onboarding</h2>
          <a href="/onboarding-flow-control">Controle de Fluxo <BsBezier/></a>
          <a href="/onboarding-approved-clients">Clientes Aprovados <BsFillPersonCheckFill/></a>
          <a href="/onboarding-analysis-clients">Clientes Em Análise <BsFillPersonLinesFill/></a>
          <a href="/onboarding-rejected-clients">Clientes Reprovados <BsFillPersonXFill/></a>
          <a href="/onboarding-error-logs">Log de Erros <BsExclamationTriangleFill/></a>
        </Stack>
    </Stack>
  )
}

export default SideBar