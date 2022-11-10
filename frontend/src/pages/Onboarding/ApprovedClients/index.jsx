import React from 'react'
import '../styles.css'
import Container from 'react-bootstrap/Container';
import Pagination from '../../../components/Pagination/ApprovedClients/index'

function ApprovedClients() {
    
  return (
    <div className="onboarding-control-page">
      <Container className="onboarding-control-container">
        <h1>Clientes Aprovados</h1>
        <Pagination/>
      </Container>
    </div>
  )
}

export default ApprovedClients