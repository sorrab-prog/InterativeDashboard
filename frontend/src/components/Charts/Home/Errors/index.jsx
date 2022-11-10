import React from 'react'
import HomeCard from '../../.././Cards/Home/index'
import { Line } from 'react-chartjs-2';
import months from '../../../../hooks/useMonths'
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

function FoundErrors() {

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

  return (
    <>
        <HomeCard
        width='40rem'
        title="Erros Encontrados"
        text={<Line 
                options={foundErrorsChartOptions} 
                data={foundErrorsChartData} 
                />
            }
        />
    </>
  )
}

export default FoundErrors