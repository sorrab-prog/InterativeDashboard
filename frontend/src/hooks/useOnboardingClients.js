import React from 'react'
import axiosInstanceOnboarding from '../api/onboarding'
import { useNavigate } from "react-router-dom";

function GetClients(){
    // Navigate is declareted here because of the Rules of Hooks, see more on: https://reactjs.org/warnings/invalid-hook-call-warning.html
    let navigate = useNavigate()

    const [clients, setClients] = React.useState([{
        id: 0,
        name: 'Artius',
        phoneNumber: "551100000000",
        mail: "artius@artius.com",
        cpf: "0000000000",
        media: "Whatsapp",
        nickName: "",
        tin: null,
        birthDate: null,
        verificationCode: "123456",
        verified: false,
        publiclyExposedPerson: false,
        acceptedTermsAndConditions: false,
        acceptedLGPDTerms: false,
        createdAt: "1999-01-01T00:00:00.383Z",
        updatedAt: "1999-01-01T00:00:00.956Z",
        addresses: [],
        documents: [],
        stages: []
    }])

    React.useEffect(() => {
        axiosInstanceOnboarding.get('process/')
        .then((res) => {
            setClients(res.data.items)
        })
        .catch((error) => {
            alert('Algo deu errado ao coletar clientes para o controle de fluxo')
           navigate('/')
        })
    }, [navigate])
    return clients
}

export default GetClients