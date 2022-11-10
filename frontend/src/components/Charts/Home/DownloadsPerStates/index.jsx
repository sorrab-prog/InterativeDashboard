import React from 'react'
import HomeCard from '../../.././Cards/Home/index'
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

function DownloadsPerStates() {

    const downloadPerStatesOptions = {
        indexAxis: 'y',
        responsive: true,
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
    <>
        <HomeCard
        width='30rem'
        title="Downloads por Estados"
        text={<Bar 
                options={downloadPerStatesOptions} 
                data={downloadPerStatesData}
                />
            }
        />
    </>
  )
}

export default DownloadsPerStates