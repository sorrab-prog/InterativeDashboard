import React from 'react'
import './styles.css'
import HomeCard from '../../components/Cards/Home/index'
import Row from 'react-bootstrap/Row';
import Registrations from '../../components/Charts/Home/Registrations/index'
import DownloadsPerDevice from '../../components/Charts/Home/DownloadsPerDevice/index'
import DownloadsPerStates from '../../components/Charts/Home/DownloadsPerStates/index'
import FoundErrors from '../../components/Charts/Home/Errors/index'
import { BsPencilSquare, BsFillPersonDashFill,BsFillPersonCheckFill, BsFillPersonLinesFill  } from 'react-icons/bs'
import CustomerVariation from '../../hooks/useCustomerVariation'
import { MdOutlineError } from "react-icons/md";
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

  const customerVariation = CustomerVariation()
  const inRegistrationCustomers = customerVariation[0]
  const previousRegistrationCustomers = customerVariation[1]

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
    <div className="home">
      <Row className="home-box-container">
        <HomeCard
        title="Em Cadastramento"
        icon={<BsPencilSquare className="card-icon"/>}
        subtitle={(inRegistrationCustomers || []).length === 0 ? <label>0 Clientes Hoje</label> : inRegistrationCustomers + " Clientes Hoje"}
        condition={inRegistrationCustomers >= previousRegistrationCustomers}
        text={previousRegistrationCustomers + ' Clientes no dia anterior'}
        />
        <HomeCard
        title="Clientes Reprovados"
        icon={<BsFillPersonDashFill className="card-icon"/>}
        subtitle="8 Clientes"
        condition={true}
        text="0 no mês passado"
        />
        <HomeCard
        title="Clientes Aprovados"
        icon={<BsFillPersonCheckFill className="card-icon"/>}
        subtitle="9.372 Clientes"
        condition={true}
        text="3.361 no mês passado"
        />
        <HomeCard
        title="Erros Encontrados"
        icon={<MdOutlineError className="card-icon"/>}
        subtitle="28 Erros"
        condition={false}
        text="43 no mês passado"
        />
        <HomeCard
        title="Aguardando Aprovação KYC"
        icon={<BsFillPersonLinesFill  className="card-icon"/>}
        subtitle="321 Clientes"
        condition={false}
        text="20 no mês passado"
        />
      </Row>
      <Row className="home-box-container">
        <Registrations/>
        <DownloadsPerDevice/>
        <FoundErrors/>
        <DownloadsPerStates/>
      </Row>
    </div>
  )
}

export default Home