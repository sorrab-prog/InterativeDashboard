import React from 'react'
import Card from 'react-bootstrap/Card';

function ErrorStatus(props) {
  return (
    <Card style={{ width: 'auto' }}>
        <Card.Body>
            <Card.Title style ={{ fontSize: '1.6em' }}>Status {props.title}</Card.Title>
            {props.status ==="Operante" ? <Card.Subtitle style={{ color:'#55aa55', fontSize:'1.4em' }}>{props.status}</Card.Subtitle> : <Card.Subtitle style={{ color:'#ff8480', fontSize:'1.4em' }}>Inoperante</Card.Subtitle>}
        </Card.Body>           
    </Card>
  )
}

export default ErrorStatus