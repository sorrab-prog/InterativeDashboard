import React from 'react'

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

// React-Charts Components
import { Pie } from 'react-chartjs-2';

//React-Charts Components
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

function IOSxAChart() {

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

  return (
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
  )
}

export default IOSxAChart