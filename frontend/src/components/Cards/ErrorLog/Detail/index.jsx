import React from 'react'
import Card from 'react-bootstrap/Card';

function ErrorDetail(props) {
  return (
    <Card style={{ width: 'auto' }}>
        <Card.Body>
            <Card.Title style ={{ fontSize: '1.5em' }}>Detalhe: {props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
        </Card.Body>           
    </Card>
  )
}

export default ErrorDetail