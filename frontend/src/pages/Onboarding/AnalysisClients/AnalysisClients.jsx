import React from 'react'
import './AnalysisClients.css'

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// React-Icons Components
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

// React-Router-DOM to redirect user to another page
import { useNavigate } from "react-router-dom";

// Fetch clients to the profile page
import axiosInstanceOnboarding from '../../../api/onboarding'

function AnalysisClients() {
    // Navigate is declareted here because of the Rules of Hooks, see more on: https://reactjs.org/warnings/invalid-hook-call-warning.html
    let navigate = useNavigate();

    const [clients, setClients] = React.useState([[]])
    const [search, setSearch] = React.useState('')
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

    function handleClientProfile(client_id){
        navigate('/client-profile/' + client_id)
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

    React.useEffect(() => {
        axiosInstanceOnboarding.get('process/')
        .then((res) => {
          setClients(res.data.items)
          setMaxCount(res.data.items.length)
        })
        .catch((error) => {
          alert('Algo deu errado ao coletar clientes aprovados')
          navigate('/')
        })
      }, [])

    const filtered_clients = React.useMemo(() => {
        const lower_search = search.toLowerCase()
        setPages(0)
        setFirstCount(0)
        setLastCount(15)
        setActivePreviousButton(false)
        setActiveNextButton(true)
        return clients.filter((client) => (client.name || '').toString().toLowerCase().includes(lower_search))
    }, [clients, search])

    function formatDate(date_unformatted){
        var date = new Date(date_unformatted)
        var formated_date = date.toLocaleString("pt-br")
        return formated_date
    }
    
  return (
    <div className="clients-page">
        <Container className="client-list-container">
                <h1>Clientes Em Análise</h1>
                <Row className="client-list-title-container">
                    <Button variant="success" className="flow-control-title-button" onClick={handleUpdate}>Atualizar</Button>
                    {activePreviousButton ? <Button variant="light" className="flow-control-title-button" onClick={handlePreviousPage}><AiOutlineArrowLeft/></Button> : <Button variant="light" className="flow-control-title-button" onClick={handlePreviousPage} disabled><AiOutlineArrowLeft/></Button>}
                    <p style = {{ width: 'auto', padding: '0', margin: '0'}}>{pages}</p>
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
                <Container fluid>
                    <Row className="clients-row">
                        <Col className="analysis-clients-col">
                            <h2>Cliente</h2>
                            {filtered_clients.slice(firstCount,lastCount).map((filtered_client) => (
                            <p key={filtered_client.id} onClick={() => handleClientProfile(filtered_client.id)}>{filtered_client.name}</p>
                        ))}
                        </Col>
                        <Col className="analysis-clients-col">
                            <h2>Data de Cadastro</h2>
                            {filtered_clients.slice(firstCount,lastCount).map((filtered_client) => (
                                <p>{formatDate(filtered_client.createdAt)}</p>
                            ))}
                        </Col>
                        <Col className="analysis-clients-col">
                            <h2>Análise de Documentos</h2>
                            {filtered_clients.slice(firstCount,lastCount).map(() => (
                                <p style={{color:"#bbbb24", fontWeight:'bold'}}>Em análise</p>
                            ))}
                        </Col>
                        <Col className="analysis-clients-col">
                            <h2>Análise de Situação Cadastral</h2>
                            {filtered_clients.slice(firstCount,lastCount).map(() => (
                                <p style={{color:"#55aa55", fontWeight:'bold'}}>Completo</p>
                            ))}
                        </Col>
                        <Col className="analysis-clients-col">
                            <h2>Liberação de Conta</h2>
                            {filtered_clients.slice(firstCount,lastCount).map(() => (
                                <p style={{color:"#ff8480", fontWeight:'bold'}}>Erro</p>
                            ))}
                        </Col>
                    </Row>
                </Container>
        </Container>
    </div>
  )
}

export default AnalysisClients