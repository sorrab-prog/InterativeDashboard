import React from 'react'

// React-Icons components
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BsFillPersonCheckFill, BsFillPersonDashFill, BsFillPersonLinesFill } from "react-icons/bs";
import { MdOutlineError } from "react-icons/md";

// Bootstrap Components
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

// Cards
import INRCard from './INR/index'

function LandingCards() {

  return (
    <Row className="home-box-container">

      <INRCard/>

      <Card style = {{ width: '23rem' }}>
        <Card.Body className="home-card-body">
          <Card.Title className="card-title">Clientes Aprovados<BsFillPersonCheckFill className="card-icon"/></Card.Title>
          <Card.Subtitle style = {{ fontSize: '1.4em' }}>9.372 Clientes</Card.Subtitle>
          <Card.Text className="home-card-text" style = {{ color: '#3da34e' }}>
            <AiOutlineArrowUp/>
            +3.21% Desde o mês passado
          </Card.Text>
        </Card.Body>
      </Card>

        <Card style = {{ width: '23rem' }}>
          <Card.Body className="home-card-body">
            <Card.Title className="card-title">Clientes Reprovados<BsFillPersonDashFill className="card-icon"/></Card.Title>
            <Card.Subtitle style = {{ fontSize: '1.4em' }}>8 Clientes</Card.Subtitle>
            <Card.Text className="home-card-text" style = {{ color: '#3da34e' }}>
              <AiOutlineArrowUp/>
              +8% Desde o mês passado
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style = {{ width: '23rem' }}>
          <Card.Body className="home-card-body">
            <Card.Title className="card-title">Erros Encontrados<MdOutlineError className="card-icon"/></Card.Title>
            <Card.Subtitle style = {{ fontSize: '1.4em' }}>28 Erros</Card.Subtitle>
            <Card.Text className="home-card-text" style = {{ color: '#ff6a6a' }}>
              <AiOutlineArrowDown/>
              -1% Desde o mês passado
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style = {{ width: '23rem' }}>
          <Card.Body className="home-card-body">
            <Card.Title className="card-title">Aguardando Aprovação KYC<BsFillPersonLinesFill className="card-icon"/></Card.Title>
            <Card.Subtitle style = {{ fontSize: '1.4em' }}>312 Clientes</Card.Subtitle>
            <Card.Text className="home-card-text" style = {{ color: '#3da34e' }}>
              <AiOutlineArrowUp/>
              +4% Desde o mês passado
            </Card.Text>
          </Card.Body>
        </Card>

      </Row>
  )
}

export default LandingCards