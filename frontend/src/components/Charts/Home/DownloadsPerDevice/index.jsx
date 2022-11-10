import React from 'react'
import HomeCard from '../../.././Cards/Home/index'
import { Pie } from 'react-chartjs-2';
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

function DownloadsPerDevice() {

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
    <>
      <HomeCard
      title="Android x IOS"
      text={<Pie data={androidXIosData}/>}
      />
    </>
  )
}

export default DownloadsPerDevice