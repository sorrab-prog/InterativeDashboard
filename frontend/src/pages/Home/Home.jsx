import React from 'react'
import './Home.css'

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

// React-Icons components
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BsFillPersonCheckFill, BsFillPersonDashFill, BsFillPersonLinesFill, BsPencilSquare } from "react-icons/bs";
import { MdOutlineError } from "react-icons/md";

// React-Charts Components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';
import faker from 'faker';

function Home() {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement
  );
  
  const registrationChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Cadastros Realizados',
      },
    },
  };

  const foundErrorsChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Erros encontrados',
      },
    },
  };

  const downloadPerStatesOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro'];

  const foundErrorsChartData = {
    labels: months,
    datasets: [
      {
        fill: true,
        label: 'Erros encontrados',
        data: months.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  const registrationChartData = {
    labels: months,
    datasets: [
      {
        label: 'Cadastros Realizados',
        data: months.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const androidXIosData = {
    labels: ['Android', 'iOS'],
    datasets: [
      {
        label: '# of Votes',
        data: [68, 32],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const states = ['SP', 'RJ', 'SC', 'RS', 'SE', 'TO', 'RN', 'PB', 'PA', 'MG']

  const downloadPerStatesData = {
    labels: states,
    datasets: [
      {
        label: 'Estados',
        data: states.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(28, 247, 20, 0.5)',
      },
    ],
  };

  return (
    <div className="home">
      <Row className="home-box-container">

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

        <Card style = {{ width: '23rem' }}>
          <Card.Body className="home-card-body">
            <Card.Title className="card-title">Em Cadastramento<BsPencilSquare className="card-icon"/></Card.Title>
            <Card.Subtitle style = {{ fontSize: '1.4em' }}>15 Clientes</Card.Subtitle>
            <Card.Text className="home-card-text" style = {{ color: '#ff6a6a' }}>
              <AiOutlineArrowDown/>
              -10% Desde o dia anterior
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>

      <Row className="home-box-container">
        <Card style = {{ width: '95%', height: '600px'}}>
          <Card.Title className="card-title" style ={{ margin:"1em", color: '#979595' }}>
            Cadastros Realizados
          </Card.Title>
          <Card.Body>
            <Bar 
            options={registrationChartOptions} 
            data={registrationChartData} 
            width={5}
            heigh={5}/>
          </Card.Body>
        </Card>
      </Row>

      <Row className="home-box-container">
        <Card style = {{width: '30rem'}}>
          <Card.Body className="home-card-body">
            <Card.Title className='card-title'>
              Android X iOS - 2022
            </Card.Title>
            <Container>
              <Pie data={androidXIosData}/>
            </Container>
          </Card.Body>
        </Card>

        <Card style = {{width: '40rem', height: '25rem'}}>
          <Card.Body className="home-card-body">
            <Card.Title className='card-title'>
              Erros encontrados - 2022
            </Card.Title>
            <Container style = {{ height: '100%' }}>
              <Line options={foundErrorsChartOptions} data={foundErrorsChartData} />
            </Container>
          </Card.Body>
        </Card>

        <Card style = {{width: '20rem'}}>
          <Card.Body className="home-card-body">
            <Card.Title className='card-title'>
              Downloads por Estados
            </Card.Title>
            <Container style = {{ height: '100%' }}>
              <Bar 
              options={downloadPerStatesOptions} 
              data={downloadPerStatesData}/>
            </Container>
          </Card.Body>
        </Card>

      </Row>

    </div>
  )
}

export default Home