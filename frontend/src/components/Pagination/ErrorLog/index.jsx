import Button from 'react-bootstrap/Button';
import errors from '../../../hooks/useErrors'
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../styles.css'

function Pagination(){
    
    const itens = errors
    const [itensPerPage, setItensPerPage] = React.useState(3)
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
            setItensPerPage(3)
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
                    list="errors" 
                    placeholder="Pesquisar Erros"
                    value={search}
                    onChange={(ev) => setSearch(ev.target.value)}/>
                    <datalist id="errors">
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
                    <h1>Código</h1>
                    {filtered_itens.map(item => {
                        return <a href={'/error-profile/' + item.id}>{item.name}</a>
                    })}
                </Col>
                <Col className="list-col">
                    <h1>Módulo</h1>
                    {filtered_itens.map(item => {
                        return <p>{item.module[0].toUpperCase() + item.module.substring(1)}</p>
                    })}
                </Col>
                <Col className="list-col">
                    <h1>Data do Erro</h1>
                    {filtered_itens.map(item => {
                        return <p>{item.date}</p>
                    })}
                </Col>
                <Col className="list-col">
                    <h1>Cliente</h1>
                    {filtered_itens.map(item => {
                        return <a href={'/client-profile/' + item.client.id}>{item.client.name}</a>
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default Pagination