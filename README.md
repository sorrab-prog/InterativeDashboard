<img src="https://lh3.googleusercontent.com/jxDT-_DeUCR3pk6FQckMpiRroDsUTzSWd4MfRBSiONeFwgZ56A2UEEESE4waG6ZDjHzRmpqGV8d_k6QeBxTSYNP4MpLgpPrCMJoVdvX9E2y04Gns5aFpyAVh3E9-eTJCkB-6gWxAKo6p2BEnqR2jK7m72C_nHYkWn3tQEw5rWHFm7pYoIxStqfRujIqxiuKJTkNXRJd6eo7SKdWyEUHJN50hnf4IWlrUVVssdkyGK4PPt-xirqagUaUxJIvdsL3HjIWjOv5K5hzZY5FA1EmXgtHPWjslD9w9ChGZWDoeycZIBIA5g0qnTy0HHWDIEPx71EDC-vJygh2gJtIYm2o8FFlEAz_k3sxayP3kd-3gmWlx-btKxWcYbVg9HRiGgbZljd-RrMuInm6ApoLcLQkYd171lPH8e9ix5EwJ-GSvj6lQQVjTIzUIXMtv7UhzTPj7Yz9IffgdeMkjiDvqT95mtMvLUMTw3_6eBjrvCFEuRMV4MZmmF8aR-_NxYLEa5brk-bN4O8PWUfD1xV9gQDivFSaFmO0M8sbxaxo917q6TcvzjowxoN-cTIa3EHepCjuzfBSrUs5uifeHKk-BFN38H-8JZAnIbwM8NbPUIPAkMcDgKOqtjSOVP7F64ECHIraOgWTIwd-wFp7nP6enWzYFv0msYPUIxuSpgxZBJqq8kM3CaUx8cQbsrSZajC_4zoNB960vJsbwUoU22D9uHKa0hrJlDdn9bsHBquZC_uDC9bD59nyKmnTwufSzlkkLvdP6cWhPNPbIQ1fBtwBEMX_iW0VZ1Zv95LACY-ZWgoAs3ZBK-INndywFRI45LrxGHjHwOiFU-1HAg_QWC-bl16iH-Y7eS_mkbeATPwxqFgrlJz_XWIiy1T8bPaIJxYaqRzDTV1W9I-PPZ1yTUhtmm-mgB8l4rSswPmYi5qDrCQ=s500-no?authuser=0" style="width: 150px; height: auto;"/>

# Índice

- [Sobre](#about)
- [Pré-requisitos](#prerequisites)
- [Instalação local](#getting_started)
- [Uso da ferramenta](#usage)

# Sobre <a name = "about"></a>

O propósito desta ferramenta é controlar e administrar todos os usuários dentro do projeto: Fitbank-Dashboard, através do framework: Django, é possível criar, excluir e editar usuários para acessar o dashboard, feito em ReactJS

A autenticação é feita via API do Rest Framework com JWT.

O front-end é construído em ReactJS.

# Dependências <a name="prerequisites"></a>

- [Python](https://www.python.org/)
- [Docker](https://www.docker.com/)
- O restante das dependências está contido no arquivo requirements.txt

## Instalação Local <a name = "getting_started"></a>

Para instalá-lo localmente e editá-lo, siga os passos abaixo:

"{ }" estarão marcados para indicar locais relativos, cujo você terá de editar

Abra o prompt de comando e digite o seguinte comando:

```
git clone {repositório}
```

Instale o restante das dependências

```
cd backend
pip install -r requirements.txt
cd frontend
npm i
```

Crie um arquivo .env na pasta backend e complete as seguintes variáveis de ambiente:
```
SECRET_KEY = {Gerar e inserir Secret Key}
DATABASE_HOST={Para desenvolvimento, utilize localhost}
DATABASE_PORT={Inserir porta criada no postgres}
DATABASE_USER={Inserir user criado no postgres}
DATABASE_PASSWORD={Inserir senha criada no postgres}
DATABASE_NAME={Inserir nome do banco de dados criado no postgres}
DEBUG = {DEBUG = FALSE para produção, DEBUG = True para desenvolvimento local}
ALLOWED_HOSTS = [localhost, 127.0.0.1, 192.168.15.14, 0.0.0.0]
```

Crie um arquivo .env na pasta frontend e complete as seguintes variáveis de ambiente:
```
REACT_APP_API_URL_LOGIN = {URL da API criada pelo backend}
REACT_APP_API_URL_ONBOARDING = 'http://54.201.122.16:3003/'
REACT_APP_API_API_KEY_ONBOARDING = {Key da API Onboarding}
```

Realize as migrações para a criação do banco de dados
```
py manage.py makemigrations
py manage.py migrate
```

Colete os arquivos estáticos para organizar o site administrativo
```
py manage.py collectstatic
```

Acesse a ferramenta com o comando
```
py manage.py runserver
```

Também é possível executar a ferramenta via Docker localmente, através do comando:
```
docker-compose run web
```

E para subir o container:
```
docker-compose up
```

Após isso, basta iniciar o servidor do dashboard:
```
npm start
```

## Usage <a name = "usage"></a>

Os usuário serão encontrados no arquivo .models dentro da pasta auth_admin, para adição de novos campos, ou edição dos existentes, basta adicionar ou editar de acordo com os Models do Django, e realizar as migrações.

**Só é possível adicionar usuários através do comando abaixo no prompt de comando:**
```
py manage.py createsuperuser
```

Após isto é possível adicionar um nome para o usuário e editar os campos no site administrativo.

Também é importante ressaltar que a comunicação com o Dashboard é feito através do Rest Framework API do Django, então ao adicionar, editar ou excluir algum campo ou algum atributo do model, é necessário que os mesmos sejam adicionados, ou excluídos do serializer.

O login no Dashboard é feito através do JWT Token, com o Rest Framework, é possível visualizar o seu funcionamento no arquivo views, dentro da pasta: auth_admin, nenhuma permissão é atribuida às APIs, pois antes da API retornar algum Response, ela verifica se o Token JWT está definido para o usuário no seu navegador, esta é a forma de permissão utilizada.

Para o usuário acessar o dashboard, basta ativar o campo booleano: is_active, e para acessar o site administrativo, basta ativar o campo booleano: is_staff.