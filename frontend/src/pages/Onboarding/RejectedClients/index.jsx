import React from 'react'
import '../styles.css'
import Container from 'react-bootstrap/Container';
import Pagination from '../../../components/Pagination/RejectedClients/index'

function RejectedClients() {

  return (
    <div className="onboarding-control-page">
        <Container className="onboarding-control-container">
            <h1>Clientes Reprovados</h1>
            <Pagination/>
        </Container>
    </div>
  )
}

export default RejectedClients