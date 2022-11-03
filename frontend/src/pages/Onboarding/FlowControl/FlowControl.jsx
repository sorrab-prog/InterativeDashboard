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
  const [search, setSearch] = React.useState('')

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
    setSearch('')
    axiosInstanceOnboarding.get('process/')
    .then((res) => {
      setClients(res.data.items)
      setPages(0)
      setFirstCount(0)
      setLastCount(15)
      setActiveNextButton(true)
      setActivePreviousButton(false)
    })
    .catch((error) => {
      alert('Algo deu errado ao coletar clientes para o controle de fluxo')
      navigate('/')
    })
  }

  const filtered_clients = React.useMemo(() => {
    const lower_search = search.toLowerCase()
    setPages(0)
    setFirstCount(0)
    setLastCount(15)
    setActivePreviousButton(false)
    setActiveNextButton(true)
    return clients.filter((client) => (client.name || '').toString().toLowerCase().includes(lower_search))
  }, [clients, search])

  React.useEffect(() => {
    if(firstCount === 0){
      setActivePreviousButton(false)
    }
    axiosInstanceOnboarding.get('process/')
    .then((res) => {
      setClients(res.data.items)
      setMaxCount(res.data.items.length)
    })
    .catch((error) => {
      alert('Algo deu errado ao coletar clientes para o controle de fluxo')
      navigate('/')
    })
  }, [])

  function handleClientProfile(client_id){
    navigate('/client-profile/' + client_id)
  }

  return (
    <div className="flow-control-page">
      <Container className="flow-control-container">
        <Row className="flow-control-title-container">
          <h1>Controle de Fluxo de Onboarding</h1>
          <Button variant="success" className="flow-control-title-button" onClick={handleUpdate}>Atualizar</Button>
          {activePreviousButton ? <Button variant="light" className="flow-control-title-button" onClick={handlePreviousPage}><AiOutlineArrowLeft/></Button> : <Button variant="light" className="flow-control-title-button" onClick={handlePreviousPage} disabled><AiOutlineArrowLeft/></Button>}
          <p>{pages}</p>
          {activeNextButton ? <Button variant="light" className="flow-control-title-button" onClick={handleNextPage} ><AiOutlineArrowRight/></Button> : <Button variant="light" className="flow-control-title-button" onClick={handleNextPage} disabled><AiOutlineArrowRight/></Button>}
          <Col className="search-column">
            <label>Procurar</label>
            <input 
            id='search_bar' 
            type="text" 
            name="search" 
            list="clients" 
            placeholder="Pesquisar clientes"
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}/>
            <datalist id="clients">
                {clients.map((client) => (
                    <option>{client.name}</option>
                ))}
            </datalist>
        </Col>
        </Row>
        <Container className="flow-control">
          <Row className="flow-control-row">
            <Col className="flow-control-col">
              <h1>Nome</h1>
              {filtered_clients.slice(firstCount,lastCount).map((filtered_client) => (
              <p onClick={() => handleClientProfile(filtered_client.id)}>{filtered_client.name}</p>    
              ))}
            </Col>
            <Col className="flow-control-col">
              <h1>Dados iniciais</h1>
              {filtered_clients.slice(firstCount,lastCount).map((filtered_client) => (
              filtered_client.verified === false ? <p className="incomplete">Incompleto</p> : <p className="complete">Completo</p>
              ))}
            </Col>
            <Col className="flow-control-col">
              <h1>Documentos</h1>
              {filtered_clients.slice(firstCount,lastCount).map((filtered_client) => (
              (filtered_client.documents || []).length === 0 ? <p className="incomplete">Incompleto</p> : <p className="complete">Completo</p>
              ))}
            </Col>
            <Col className="flow-control-col">
              <h1>Obrigações Fiscais</h1>
              {filtered_clients.slice(firstCount,lastCount).map((filtered_client) => (
              filtered_client.acceptedTermsAndConditions === false ? <p className="incomplete">Incompleto</p> : <p className="complete">Completo</p>
              ))}
            </Col>
            <Col className="flow-control-col">
              <h1>Termos e Condições</h1>
              {filtered_clients.slice(firstCount,lastCount).map((filtered_client) => (
              filtered_client.publiclyExposedPerson === false ? <p className="incomplete">Incompleto </p> : <p className="complete">Completo</p>
              ))}
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default FlowControl