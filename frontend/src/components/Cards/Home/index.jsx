import React from 'react'
import Card from 'react-bootstrap/Card';
import './styles.css'
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

function HomeCard(props) {
  return (
    <Card style = {{ width: props.width }}>
        <Card.Body className="card-body">
            <Card.Title className="card-title">{props.title} {props.icon}</Card.Title>
            <Card.Subtitle className="card-subtitle">{props.subtitle}</Card.Subtitle>
            {props.condition ? <Card.Text className="card-text-arrow-up">
              <AiOutlineArrowUp/>
              {props.text}
            </Card.Text> : 
            <Card.Text className="card-text-arrow-down">
              <AiOutlineArrowDown/>
              {props.text}
            </Card.Text>}
        </Card.Body>
    </Card>
  )
}

export default HomeCard