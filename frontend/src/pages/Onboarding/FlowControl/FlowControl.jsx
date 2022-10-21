import React from 'react'
import './FlowControl.css'
import axiosInstanceOnboarding from '../../../api/onboarding'

// React-Router-DOM component to redirect user to another page
import { useNavigate } from "react-router-dom";

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// React-Icons Components
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function FlowControl() {
  // Navigate is declareted here because of the Rules of Hooks, see more on: https://reactjs.org/warnings/invalid-hook-call-warning.html
  let navigate = useNavigate();

  const [clients, setClients] = React.useState([[]])
  const [activePreviousButton, setActivePreviousButton] = React.useState(true)
  const [activeNextButton, setActiveNextButton] = React.useState(true)
  const [firstCount, setFirstCount] = React.useState(0)
  const [lastCount, setLastCount] = React.useState(15)
  const [maxCount, setMaxCount] = React.useState(0)
  const [pages, setPages] = React.useState(0)

  function handlePreviousPage(e){
    e.preventDefault()

    setPages(pages - 1)
    setActivePreviousButton(true)
    setActiveNextButton(true)
    setFirstCount(firstCount - 15)
    setLastCount(lastCount - 15)
    if(firstCount - 15 <= 0 || firstCount === 0 ){
      setActivePreviousButton(false)
    }
  }

  function handleNextPage(e){
    e.preventDefault()
    
    setPages(pages + 1)
    setActivePreviousButton(true)
    setActiveNextButton(true)
    setFirstCount(firstCount + 15)
    setLastCount(lastCount + 15)
    if(lastCount + 15 >= maxCount){
      setActiveNextButton(false)
    }
  }

  function handleUpdate(e){
    e.preventDefault()
    axiosInstanceOnboarding.get('person/natural/')
    .then((res) => {
      setClients(res.data.items)
      setPages(0)
      setFirstCount(0)
      setLastCount(15)
    })
    .catch((error) => {
      alert('Algo deu errado, por gentileza, contate o administrador')
      navigate('/')
    })
  }

  React.useEffect(() => {
    if(firstCount === 0){
      setActivePreviousButton(false)
    }
    axiosInstanceOnboarding.get('person/natural/')
    .then((res) => {
      setClients(res.data.items)
      setMaxCount(res.data.items.length)
    })
    .catch((error) => {
      alert('Algo deu errado, por gentileza, contate o administrador')
      navigate('/')
    })
  }, [])

  return (
    <div className="flow-control-page">
      <Container className="flow-control-container">
        <Row className="flow-control-title-container">
          <h1>Controle de Fluxo de Onboarding</h1>
          <Button variant="success" className="flow-control-title-button" onClick={handleUpdate}>Atualizar</Button>
          {activePreviousButton ? <Button variant="light" className="flow-control-title-button" onClick={handlePreviousPage}><AiOutlineArrowLeft/></Button> : <Button variant="light" className="flow-control-title-button" onClick={handlePreviousPage} disabled><AiOutlineArrowLeft/></Button>}
          <p>{pages}</p>
          {activeNextButton ? <Button variant="light" className="flow-control-title-button" onClick={handleNextPage} ><AiOutlineArrowRight/></Button> : <Button variant="light" className="flow-control-title-button" onClick={handleNextPage} disabled><AiOutlineArrowRight/></Button>}
        </Row>
        <Container className="flow-control">
          <Row className="flow-control-row">
            <Col className="flow-control-col">
              <h1>Nome</h1>
              {clients.slice(firstCount,lastCount).map((client) => (
              <p>{client.name}</p>    
              ))}
            </Col>
            <Col className="flow-control-col">
              <h1>Dados iniciais</h1>
              {clients.slice(firstCount,lastCount).map((client) => (
              client.verified === false ? <p className="incomplete">Incompleto</p> : <p className="complete">Completo</p>
              ))}
            </Col>
            <Col className="flow-control-col">
              <h1>Documentos</h1>
              {clients.slice(firstCount,lastCount).map((client) => (
              (client.documents || []).length === 0 ? <p className="incomplete">Incompleto</p> : <p className="complete">Completo</p>
              ))}
            </Col>
            <Col className="flow-control-col">
              <h1>Termos e Condições</h1>
              {clients.slice(firstCount,lastCount).map((client) => (
              client.acceptedTermsAndConditions === false ? <p className="incomplete">Incompleto</p> : <p className="complete">Completo</p>
              ))}
            </Col>
            <Col className="flow-control-col">
              <h1>PPE</h1>
              {clients.slice(firstCount,lastCount).map((client) => (
              client.publiclyExposedPerson === false ? <p className="incomplete">Não </p> : <p className="complete">Sim</p>
              ))}
            </Col>
            <Col className="flow-control-col">
              <h1>Possui TIN?</h1>
              {clients.slice(firstCount,lastCount).map((client) => (
              client.tin === null ? <p className="incomplete">Não </p> : <p className="complete">Sim</p>
              ))}
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default FlowControl