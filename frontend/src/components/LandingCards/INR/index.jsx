import React from 'react'
import axiosInstanceOnboarding from '../../../api/onboarding';

// Bootstrap Components
import Card from 'react-bootstrap/Card';

// React-Icons components
import { BsPencilSquare } from 'react-icons/bs'
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

function INRCard() {

    const [inRegistrationCustomers, setInRegistrationCustomers] = React.useState([])
    const [previousRegistrationCustomers, setPreviousRegistrationCustomers] = React.useState([])

    React.useEffect(() => {
        axiosInstanceOnboarding.get('process/')
        .then((res) => {
            const actual_date = new Date()
            const previous_date_same_time = new Date()
            previous_date_same_time.setDate(previous_date_same_time.getDate() - 1)
            const previous_day = previous_date_same_time.getDate()
            const actual_month = actual_date.getMonth()
            const actual_year = actual_date.getFullYear()
            const actual_date_fixed_hour = new Date(actual_year, actual_month, previous_day, 23, 59, 59, 999)
            const first_minute_last_day = new Date(actual_year, actual_month, previous_day, 0, 0, 0, 0)
            res.data.items.map((item) => {
                if(new Date(item.createdAt) >= actual_date_fixed_hour){
                  setInRegistrationCustomers(inRegistrationCustomers.unshift(item))
                }
                if(new Date(item.createdAt) <= actual_date_fixed_hour && new Date(item.createdAt) >= first_minute_last_day){
                  setPreviousRegistrationCustomers(previousRegistrationCustomers.unshift(item))
                }
                return null
            })
        })
        .catch((error) => {
          alert('Erro ao coletar dados de clientes em cadastramento')
        })
    }, [])
    
    return (
        <Card style = {{ width: '23rem' }}>
          <Card.Body className="home-card-body">
            <Card.Title className="card-title">Em Cadastramento<BsPencilSquare className="card-icon"/></Card.Title>
            <Card.Subtitle style = {{ fontSize: '1.4em' }}>{ (inRegistrationCustomers || []).length === 0 ? <label>0</label> : inRegistrationCustomers } Clientes Hoje</Card.Subtitle>
            {inRegistrationCustomers >= previousRegistrationCustomers ? <Card.Text className="home-card-text-arrow-up">
              {inRegistrationCustomers >= previousRegistrationCustomers ? <AiOutlineArrowUp/> : <AiOutlineArrowDown/>}
              { (previousRegistrationCustomers || []).length === 0 ? <label>0</label> : previousRegistrationCustomers } Clientes no dia anterior
            </Card.Text> : 
            <Card.Text className="home-card-text-arrow-down">
              {inRegistrationCustomers >= previousRegistrationCustomers ? <AiOutlineArrowUp/> : <AiOutlineArrowDown/>}
              { (previousRegistrationCustomers || []).length === 0 ? <label>0</label> : previousRegistrationCustomers } Clientes no dia anterior
            </Card.Text>}
          </Card.Body>
        </Card>
    )
}

export default INRCard