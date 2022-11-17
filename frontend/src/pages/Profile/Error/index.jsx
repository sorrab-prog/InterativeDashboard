import React from 'react'
import '../styles.css'
import errors from '../../../hooks/useErrors'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ErrorProfile() {

    const errorParams = useParams()
    const [errorProfile, setErrorProfile] = React.useState(
    {
        id:1,
        name: "Error",
        detail:"Sem detalhes",
        client: {
            id: 0,
            name: 'Sem cliente' 
        },
        module:'indefinido',
        date: '00/00/00 00:00:00'
    },
    )

    React.useEffect(() => {
        errors.map((error) => {
            if(error.id.toString() === errorParams.id){
                setErrorProfile(error)
            }
            return null
        })
    }, [errorParams.id])

  return (
    <div className="profile-page">
      <Card style={{ width: '60%', height: 'auto' }}>
        <Card.Body style = {{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', gap: '2em', alignItems: 'flex-start' }}>
          <Card.Title>Descrição Completa do erro</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item className="profile-information">
              <p>ID:</p>{errorProfile.id}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>Nome:</p>{errorProfile.name}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>Detalhe:</p>{errorProfile.detail}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>Cliente:</p>{errorProfile.client.name}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>Módulo:</p>{(errorProfile.module || 'indefinido')[0].toUpperCase() + (errorProfile.module || 'indefinido').substring(1)}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>Data do Erro:</p>{errorProfile.date}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ErrorProfile