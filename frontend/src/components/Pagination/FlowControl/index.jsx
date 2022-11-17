import Button from 'react-bootstrap/Button';
import getClients from '../../../hooks/useOnboardingClients'
import formatCPF from '../../../tools/formatCPF'
import formatDate from '../../../tools/formatDate'
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../styles.css'

function Pagination(){
    
    const itens = getClients()
    const [itensPerPage, setItensPerPage] = React.useState(10)
    const [currentPage, setCurrentPage] = React.useState(0)
    const pages = Math.ceil(itens.length / itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = itens.slice(startIndex, endIndex)

    const [search, setSearch] = React.useState('')
    const filtered_itens = React.useMemo(() => {
        const lower_search = search.toLowerCase()
        return currentItens.filter((currentItem) => 
        (currentItem.name || '').toString().toLowerCase().includes(lower_search))
    }, [currentItens, search])

    React.useEffect(() => {
        if(search === ''){
            setCurrentPage(0)
            setItensPerPage(10)
        }
        else if(search !== ''){
            setCurrentPage(0)
            setItensPerPage(itens.length)
        }
    }, [search, itens.length])

    return(
        <Container fluid className="onboarding-container">
            <Row className="filter-row">
                <Col className="search-col">
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
                        {currentItens.map((currentItem) => (
                            <option>{currentItem.name}</option>
                        ))}
                    </datalist>
                </Col>
                <Row className="select-page-row">
                    <select value = {itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))}>
                        <option value={1}>1</option>
                        <option value={3}>3</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                    </select>
                    <div className="actual-page-col">
                        <p>Página Atual:</p>
                        <p>{currentPage + 1}</p>
                    </div>
                    {Array.from(Array(pages), (item, index) =>{
                        return <Button 
                        onClick= {(e) => setCurrentPage(Number(e.target.value))}
                        value={index}
                        style = {{ width: '30px' }}
                        >{index + 1}</Button>
                    })}
                </Row>
            </Row>
            <Row className="list-row">
                <Col className="list-col">
                    <h1>Nome</h1>
                    {filtered_itens.map(item => {
                        return <a href={'/client-profile/' + item.id}>{item.name}</a>
                    })}
                </Col>
                <Col className="list-col">
                    <h1>Data de Cadastro</h1>
                    {filtered_itens.map(item => {
                        return <p>{formatDate(item.createdAt)}</p>
                    })}
                </Col>
                <Col className="list-col">
                    <h1>CPF</h1>
                    {filtered_itens.map(item => {
                        return <p>{formatCPF(item.cpf)}</p>
                    })}
                </Col>
                <Col className="list-col">
                    <h1>Dados Iniciais</h1>
                    {filtered_itens.map((item) => {
                        const stageList = []
                        item.stages.map((stage) => (
                            stageList.push(stage.id)
                        ))
                        if(stageList.includes(1)){
                            return <p className="complete">Completo</p>
                        }
                        else{
                            return <p className="incomplete">Incompleto</p>
                        }
                    })}
                </Col>
                <Col className="list-col">
                    <h1>Documentos</h1>
                    {filtered_itens.map((item) => {
                        const stageList = []
                        item.stages.map((stage) => (
                            stageList.push(stage.id)
                        ))
                        if(stageList.includes(2)){
                            return <p className="complete">Completo</p>
                        }
                        else{
                            return <p className="incomplete">Incompleto</p>
                        }
                    })}
                </Col>
                <Col className="list-col">
                    <h1>Obrigações Fiscais</h1>
                    {filtered_itens.map((item) => {
                        const stageList = []
                        item.stages.map((stage) => (
                            stageList.push(stage.id)
                        ))
                        if(stageList.includes(3)){
                            return <p className="complete">Preenchido</p>
                        }
                        else{
                            return <p className="incomplete">Isento</p>
                        }
                    })}
                </Col>
                <Col className="list-col">
                    <h1>Termos e Condições</h1>
                    {filtered_itens.map((item) => {
                        const stageList = []
                        item.stages.map((stage) => (
                            stageList.push(stage.id)
                        ))
                        if(stageList.includes(4)){
                            return <p className="complete">Completo</p>
                        }
                        else{
                            return <p className="incomplete">Incompleto</p>
                        }
                    })}
                </Col>
                <Col className="list-col">
                    <h1>Finalização de Cadastro</h1>
                    {filtered_itens.map((item) => {
                        const stageList = []
                        item.stages.map((stage) => (
                            stageList.push(stage.id)
                        ))
                        if(stageList.includes(5)){
                            return <p className="complete">Completo</p>
                        }
                        else{
                            return <p className="incomplete">Incompleto</p>
                        }
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default Pagination