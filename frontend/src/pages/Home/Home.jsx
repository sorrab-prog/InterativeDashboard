import React from 'react'
import './Home.css'

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

// Personal Components
import LandingCards from '../../components/LandingCards/LandingCards'
import RSChart from '../../components/Charts/RS/index'
import IOSxAChart from '../../components/Charts/IOSxA/index'

// React-Charts Components
import { Bar, Line } from 'react-chartjs-2';
import faker from 'faker';

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
  
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

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

      <LandingCards/>

      <RSChart/>

      <Row className="home-box-container">
        
        <IOSxAChart/>

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