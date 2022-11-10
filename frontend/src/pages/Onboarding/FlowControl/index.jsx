import React from 'react'
import '../styles.css'
import Container from 'react-bootstrap/Container';
import Pagination from '../../../components/Pagination/FlowControl/index'

function FlowControl() {

  return (
    <div className="onboarding-control-page">
      <Container className="onboarding-control-container">
        <h1>Controle de Fluxo de Onboarding</h1>
        <Pagination/>
      </Container>
    </div>
  )
}

export default FlowControl