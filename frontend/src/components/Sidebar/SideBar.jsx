import React from 'react'
import './SideBar.css'
import logo from '../../assets/img/logo.png'

// Bootstrap Components
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

// React-Icons Components
import { BsFillPersonCheckFill, BsFillPersonXFill, BsExclamationTriangleFill, BsFillPersonLinesFill, BsBezier, BsFillHouseFill } from "react-icons/bs";

function SideBar() {

  const [isOpen, setIsOpen] = React.useState(false)

  const handleButtonClick = () => {
    if(isOpen === true){
      setIsOpen(false)
    }
    else if(isOpen === false){
      setIsOpen(true)
    }
  }

  return (
    <Stack direction="vertical" gap={1} className="sidebar" onClick={handleButtonClick}>
      <img src={logo} alt="Fitbank-Dashboard"/>
      <Container className="content-container">
        <Stack direction="vertical" gap={3} className="content-list">
          <a href="/">Home <BsFillHouseFill/></a>
          <h2>Onboarding</h2>
          <a href="/onboarding-flow-control">Controle de Fluxo <BsBezier className="link-icon"/></a>
          <a href="/onboarding-approved-clients">Clientes Aprovados <BsFillPersonCheckFill/></a>
          <a href="/onboarding-analysis-clients">Clientes Em Análise <BsFillPersonLinesFill/></a>
          <a href="/onboarding-rejected-clients">Clientes Reprovados <BsFillPersonXFill/></a>
          <a href="/onboarding-error-logs">Log de Erros <BsExclamationTriangleFill/></a>
        </Stack>
      </Container>
      {isOpen ?
        <Card className="responsive-sidebar">
        <Card.Body>
          <Stack direction="vertical" gap={3}>
            <a href="/">Home <BsFillHouseFill/></a>
            <h2>Onboarding</h2>
            <a href="/onboarding-flow-control">Controle de Fluxo <BsBezier/></a>
            <a href="/onboarding-approved-clients">Clientes Aprovados <BsFillPersonCheckFill/></a>
            <a href="/onboarding-analysis-clients">Clientes Em Análise <BsFillPersonLinesFill/></a>
            <a href="/onboarding-rejected-clients">Clientes Reprovados <BsFillPersonXFill/></a>
            <a href="/onboarding-error-logs">Log de Erros <BsExclamationTriangleFill/></a>
          </Stack>
        </Card.Body>
      </Card> : null}
    </Stack>
  )
}

export default SideBar