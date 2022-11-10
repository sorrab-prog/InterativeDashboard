import React from 'react'
import '../styles.css'
import axiosInstanceOnboarding from '../../../api/onboarding'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import formatCPF from '../../../tools/formatCPF'
import formatDate from '../../../tools/formatDate'
import formatPhone from '../../../tools/formatPhone'

function ClientProfile() {

  const clientParams = useParams()
  const [client, setClient] = React.useState([])
  const [documentURL, setDocumentURL] = React.useState('')

  React.useEffect(() => {
    axiosInstanceOnboarding.get('process/')
    .then((res) => {
      res.data.items.map((item) =>{
        if(item.id.toString() === clientParams.id){
          if(item.documents[0] !== undefined){
            axiosInstanceOnboarding.post('document/file/download', {
              documentId : item.documents[0].id,
            }, { responseType: 'blob' }).then((res) => {
              setDocumentURL(URL.createObjectURL(res.data))
            })
          }
          else{
            setDocumentURL('')
          }
          setClient(item)
          return null
        }
        return null
      })
    })
    .catch((error) => {
      alert('Algo deu errado ao coletar as informações do perfil do cliente')
      console.log(error)
    })
    
  }, [])

  return (
    <div className="profile-page">
      <Card style={{ width: '60%', height: 'auto' }}>
        <Card.Body style = {{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', gap: '2em', alignItems: 'flex-start' }}>
          <Card.Title>Dados Cadastrais Completos</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item className="profile-information">
              <p>Nome:</p>{client.name === '' || client.name === null ? <label className="incomplete">Não preenchido</label> : client.name}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>Apelido:</p>{client.nickName === '' || client.nickName === null ? <label className="incomplete">Não preenchido</label> : client.nickName}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>Número de Telefone:</p>{client.phoneNumber === '' || client.phoneNumber === null ? <label className="incomplete">Não preenchido</label> : formatPhone(client.phoneNumber)}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>E-mail:</p>{client.mail === '' || client.main === null ? <label className="incomplete">Não preenchido</label> : client.mail}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>Forma de Contato Escolhida:</p>{client.media}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>Verificação de Contato:</p>{client.verified ? <label className="complete">Completo</label> : <label className="incomplete">Incompleto</label>}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>Aceite nos termos e condições:</p>{client.acceptedTermsAndConditions ? <label className="complete">Aceito</label> : <label className="incomplete">Não aceito</label>}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>Pessoa Politicamente Exposta</p>{client.acceptedTermsAndConditions ? <label className="complete">Sim</label> : <label className="incomplete">Não</label>}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>CPF:</p>{client.cpf === '' || client.cpf === null ? <label className="incomplete">Não preenchido</label> : formatCPF(client.cpf || '')}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>TIN:</p>{client.tin === '' || client.tin === null ? <label className="incomplete">Não preenchido</label>: client.tin}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>Data de aniversário:</p>{client.birthDate === '' || client.birthDate === null ? <label className="incomplete">Não preenchido</label>: client.birthDate}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>Criado em:</p>{formatDate(client.createdAt)}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>Atualizado em:</p>{client.updated_at === '' || null ? <label className="incomplete">Não atualizado</label>: formatDate(client.updatedAt)}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>Documentos:</p>{(client.documents || []).length === 0 ? <label className="incomplete">Sem documentos</label> : <img src={documentURL} alt="Foto do documento do cliente" style = {{ width: '200px', height: 'auto' }}/>}
            </ListGroup.Item>
            <ListGroup.Item className="profile-information">
              <p>Endereço:</p>{(client.adresses || []).length === 0 ? <label className="incomplete">Não preenchido</label> : client.adresses[0].adressLine + ', ' + client.adresses[0].neighborhood + ', ' + client.adressess[0].cityName + ', ' + client.adressess[0].number + ', ' + client.adressess[0].complement}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ClientProfile