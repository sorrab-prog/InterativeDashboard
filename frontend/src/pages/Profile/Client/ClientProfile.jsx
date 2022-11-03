import React from 'react'
import './ClientProfile.css'

// Fetch client profile information
import axiosInstanceOnboarding from '../../../api/onboarding'

// React-Router-DOM component to redirect user to another page
import { useNavigate } from "react-router-dom";

// React-Router-DOM component to get the params from the url
import { useParams } from 'react-router-dom'

// Bootstrap components
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ClientProfile() {
  // Navigate is declareted here because of the Rules of Hooks, see more on: https://reactjs.org/warnings/invalid-hook-call-warning.html
  let navigate = useNavigate();

  const clientParams = useParams()
  const [client, setClient] = React.useState([])

  React.useEffect(() => {
    axiosInstanceOnboarding.get('process/')
    .then((res) => {
      res.data.items.map((item) =>{
        if(item.id.toString() === clientParams.id){
          setClient(item)
          return null
        }
        return null
      })
    })
    .catch((error) => {
      alert('Algo deu errado ao coletar as informações do perfil do cliente')
      navigate('/')
    })
    axiosInstanceOnboarding.post('document/file/download', {
      documentId : 1,
      processId: 1,
      stageId: 1
    }).then((res) => {
      console.log(res)
      const blob = res.blob()
      document.getElementById('documentImage').src = URL.createObjectURL(blob)
    })
  }, [])

  function formatCPF(cpf){
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  function formatDate(date_unformatted){
    var date = new Date(date_unformatted)
    var formated_date = date.toLocaleString("pt-br")
    return formated_date
  }

  const formatPhone = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d{2})(\d)/,"$1 $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  return (
    <div className="client-profile-page">
      <Card style={{ width: '60%', height: 'auto' }}>
        <Card.Body style = {{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', gap: '2em', alignItems: 'flex-start' }}>
          <Card.Title>Dados Cadastrais Completos</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item className="client-information">
              <p>Nome:</p>{client.name === null ? <label className="incomplete">Não preenchido</label> : client.name}
            </ListGroup.Item>
            <ListGroup.Item className="client-information">
              <p>Apelido:</p>{client.nickName === null ? <label className="incomplete">Não preenchido</label> : client.nickName}
            </ListGroup.Item>
            <ListGroup.Item className="client-information">
              <p>Número de Telefone:</p>{client.phoneNumber === null ? <label className="incomplete">Não preenchido</label> : formatPhone(client.phoneNumber)}
            </ListGroup.Item>
            <ListGroup.Item className="client-information">
              <p>E-mail:</p>{client.mail === null ? <label className="incomplete">Não preenchido</label> : client.mail}
            </ListGroup.Item>
            <ListGroup.Item className="client-information">
              <p>Forma de Contato Escolhida:</p>{client.media}
            </ListGroup.Item>
            <ListGroup.Item className="client-information">
              <p>Código de verificação:</p>{client.verificationCode === null ? <label className="incomplete">Não enviado</label> : client.verificationCode}
            </ListGroup.Item>
            <ListGroup.Item className="client-information">
              <p>Verificação de Contato:</p>{client.verified ? <label className="complete">Completo</label> : <label className="incomplete">Incompleto</label>}
            </ListGroup.Item>
            <ListGroup.Item className="client-information">
              <p>Aceite nos termos e condições:</p>{client.acceptedTermsAndConditions ? <label className="complete">Aceito</label> : <label className="incomplete">Não aceito</label>}
            </ListGroup.Item>
            <ListGroup.Item className="client-information">
              <p>Pessoa Politicamente Exposta</p>{client.acceptedTermsAndConditions ? <label className="complete">Sim</label> : <label className="incomplete">Não</label>}
            </ListGroup.Item>
            <ListGroup.Item className="client-information">
              <p>CPF:</p>{client.cpf === null ? <label className="incomplete">Não preenchido</label> : formatCPF(client.cpf || '')}
            </ListGroup.Item>
            <ListGroup.Item className="client-information">
              <p>TIN:</p>{client.tin === null ? <label className="incomplete">Não preenchido</label>: client.tin}
            </ListGroup.Item>
            <ListGroup.Item className="client-information">
              <p>Data de aniversário:</p>{client.birthDate === null ? <label className="incomplete">Não preenchido</label>: client.birthDate}
            </ListGroup.Item>
            <ListGroup.Item className="client-information">
              <p>Criado em:</p>{formatDate(client.createdAt)}
            </ListGroup.Item>
            <ListGroup.Item className="client-information">
              <p>Atualizado em:</p>{client.updated_at === null ? <label className="incomplete">Não atualizado</label>: formatDate(client.updatedAt)}
            </ListGroup.Item>
            <ListGroup.Item className="client-information">
              <p>Documentos:</p>{(client.documents || []).length === 0 ? <label className="incomplete">Sem documentos</label> : <img id= 'documentImage' src='' alt="Foto do documento do cliente"/>}
            </ListGroup.Item>
            <ListGroup.Item className="client-information">
              <p>Endereço:</p>{(client.adresses || []).length === 0 ? <label className="incomplete">Não preenchido</label> : client.adresses[0].adressLine + ', ' + client.adresses[0].neighborhood + ', ' + client.adressess[0].cityName + ', ' + client.adressess[0].number + ', ' + client.adressess[0].complement}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ClientProfile