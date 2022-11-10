import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import errors from '../../../../hooks/useErrors'
import Card from 'react-bootstrap/Card';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function ErrorsChart() {

    const [actualMonth, setActualMonth] = React.useState('')
    React.useEffect(() => {
        if (new Date().getMonth() === 0){
            setActualMonth('Janeiro')
        }
        if (new Date().getMonth() === 1){
            setActualMonth('Fevereiro')
        }
        if (new Date().getMonth() === 2){
            setActualMonth('Março')
        }
        if (new Date().getMonth() === 3){
            setActualMonth('Abril')
        }
        if (new Date().getMonth() === 4){
            setActualMonth('Maio')
        }
        if (new Date().getMonth() === 5){
            setActualMonth('Junho')
        }
        if (new Date().getMonth() === 6){
            setActualMonth('Julho')
        }
        if (new Date().getMonth() === 7){
            setActualMonth('Agosto')
        }
        if (new Date().getMonth() === 8){
            setActualMonth('Setembro')
        }
        if (new Date().getMonth() === 9){
            setActualMonth('Outubro')
        }
        if (new Date().getMonth() === 10){
            setActualMonth('Novembro')
        }
        if (new Date().getMonth() === 11){
            setActualMonth('Dezembro')
        }
    }, [])

    const options = {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Erros encontrados - ' + actualMonth,
          },
        },
      };

      const data = {
        labels: errors.map((error) => {
          return error.name
        }),
        datasets: [
          {
            label: 'Erros encontrados',
            data: errors.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

  return (
    <Card style = {{
      width: '100%',
      height: '500px'
    }}>
      <Bar 
      options={options} 
      data={data} 
      width={10}
      height={10}
      />
    </Card>
  )
}

export default ErrorsChart