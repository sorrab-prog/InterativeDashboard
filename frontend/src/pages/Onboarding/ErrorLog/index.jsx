import React from 'react'
import '../styles.css'
import Container from 'react-bootstrap/Container';
import ErrorStatus from '../../../components/Cards/ErrorLog/Status/index'
import ErrorDetail from '../../../components/Cards/ErrorLog/Detail/index'
import ErrorsChart from '../../../components/Charts/ErrorLog/Errors/index'
import Pagination from '../../../components/Pagination/ErrorLog/index'
import Row from 'react-bootstrap/Row';
import errors from '../../../hooks/useErrors'

function ErrorLog() {  

  return (
    <div className="onboarding-control-page">
      <Container className="onboarding-control-container">
          <h1>Log de Erros</h1>
          <Row style={{ 
          display:'flex', 
          gap: '2vw', 
          justifyContent: 'center', 
          alignItems:'center', 
          width: '100%',
          flexWrap: 'wrap'}}>
            <ErrorStatus
            title="Onboarding"
            status="Inoperante"
            />
            <ErrorStatus
            title="APP"
            status="Operante"
            />
          </Row>
            <ErrorsChart/>
            <h1>Detalhamento de erros:</h1>
            <Row style={{ 
            display:'flex', 
            gap: '2vw', 
            justifyContent: 'center', 
            alignItems:'center',
            width: '100%',
             }}>
              {errors.map((error) => {
              return <ErrorDetail
                title={error.name}
                text={error.detail}
              />
              })}
            </Row>
            <h1>Histórico de Erros:</h1>
            <Pagination/>
      </Container>
    </div>
  )
}

export default ErrorLog