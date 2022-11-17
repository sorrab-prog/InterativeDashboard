import React from 'react'
import axiosInstanceOnboarding from '../../../../api/onboarding';
import HomeCard from '../../../Cards/Home/index'
import months from '../../../../hooks/useMonths'
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
import { Bar } from 'react-chartjs-2';

function Registrations() {

    const [customersRegistrationsJan, setCustomerRegistrationsJan] = React.useState([])
    const [customersRegistrationsFev, setCustomerRegistrationsFev] = React.useState([])
    const [customersRegistrationsMarch, setCustomerRegistrationsMarch] = React.useState([])
    const [customersRegistrationsApr, setCustomerRegistrationsApr] = React.useState([])
    const [customersRegistrationsMay, setCustomerRegistrationsMay] = React.useState([])
    const [customersRegistrationsJune, setCustomerRegistrationsJune] = React.useState([])
    const [customersRegistrationsJul, setCustomerRegistrationsJul] = React.useState([])
    const [customersRegistrationsAug, setCustomerRegistrationsAug] = React.useState([])
    const [customersRegistrationsSept, setCustomerRegistrationsSept] = React.useState([])
    const [customersRegistrationsOct, setCustomerRegistrationsOct] = React.useState([])
    const [customersRegistrationsNov, setCustomerRegistrationsNov] = React.useState([])
    const [customersRegistrationsDec, setCustomerRegistrationsDec] = React.useState([])

    const registrationChartOptions = {
        responsive: true,
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

    const registrationChartData = {
        labels: months,
        datasets: [
          {
            label: 'Cadastros Iniciados',
            data: [
              customersRegistrationsJan,
              customersRegistrationsFev,
              customersRegistrationsMarch,
              customersRegistrationsApr,
              customersRegistrationsMay,
              customersRegistrationsJune,
              customersRegistrationsJul,
              customersRegistrationsAug,
              customersRegistrationsSept,
              customersRegistrationsOct,
              customersRegistrationsNov,
              customersRegistrationsDec
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

      React.useEffect(() => {
        axiosInstanceOnboarding.get('/process/')
        .then((res) => {
          res.data.items.map((item) => {
            if(new Date(item.createdAt).getMonth() === 0){
              setCustomerRegistrationsJan(customersRegistrationsJan.unshift(item))
            }
            if(new Date(item.createdAt).getMonth() === 1){
              setCustomerRegistrationsFev(customersRegistrationsFev.unshift(item))
            }
            if(new Date(item.createdAt).getMonth() === 2){
              setCustomerRegistrationsMarch(customersRegistrationsMarch.unshift(item))
            }
            if(new Date(item.createdAt).getMonth() === 3){
              setCustomerRegistrationsApr(customersRegistrationsApr.unshift(item))
            }
            if(new Date(item.createdAt).getMonth() === 4){
              setCustomerRegistrationsMay(customersRegistrationsMay.unshift(item))
            }
            if(new Date(item.createdAt).getMonth() === 5){
              setCustomerRegistrationsJune(customersRegistrationsJune.unshift(item))
            }
            if(new Date(item.createdAt).getMonth() === 6){
              setCustomerRegistrationsJul(customersRegistrationsJul.unshift(item))
            }
            if(new Date(item.createdAt).getMonth() === 7){
              setCustomerRegistrationsAug(customersRegistrationsAug.unshift(item))
            }
            if(new Date(item.createdAt).getMonth() === 8){
              setCustomerRegistrationsSept(customersRegistrationsSept.unshift(item))
            }
            if(new Date(item.createdAt).getMonth() === 9){
              setCustomerRegistrationsOct(customersRegistrationsOct.unshift(item))
            }
            if(new Date(item.createdAt).getMonth() === 10){
              setCustomerRegistrationsNov(customersRegistrationsNov.unshift(item))
            }
            if(new Date(item.createdAt).getMonth() === 11){
              setCustomerRegistrationsDec(customersRegistrationsDec.unshift(item))
            }
            return null
          })
        })
        .catch((error) => {
          alert('Erro ao coletar dados de cadastros iniciados')
        })
      }, [])

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

  return (
    <>
      <HomeCard
      width="95%"
      title="Cadastros Iniciados"
      text={<Bar 
            options={registrationChartOptions} 
            data={registrationChartData} 
            />
          }
      />
    </>
  )
}

export default Registrations