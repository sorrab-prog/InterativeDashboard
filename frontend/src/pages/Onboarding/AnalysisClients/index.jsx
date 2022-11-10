import React from 'react'
import '../styles.css'
import Container from 'react-bootstrap/Container';
import Pagination from '../../../components/Pagination/AnalysisClients/index'

function AnalysisClients() {
    
  return (
    <div className="onboarding-control-page">
        <Container className="onboarding-control-container">
            <h1>Clientes Em Análise</h1>
            <Pagination/>
        </Container>
    </div>
  )
}

export default AnalysisClients