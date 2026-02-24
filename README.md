# Implementação do microsserviço de Vendas de Ingressos

## Descrição

A proposta desta atividade prática é o desenvolvimento do microsserviço de vendas (Sales) para a aplicação de Gerenciamentos de Tickets. Este microsserviço é responsável por registrar os eventos disponíveis e realizar a venda de ingressos para os usuários.
Desenvolvido em Java utilizando o framework Spring Boot, Docker e arquitetura de microsserviços.


**Arquitetura de Microsserviços:**

Users Service: Gestão de usuários e autenticação.

Sales Service: Regras de negócio para eventos e vendas de ingressos.

Gateway (Spring Cloud Gateway): Ponto único de entrada, roteamento e segurança.

Nameserver (Eureka): Descoberta de serviços para comunicação inter-serviços.

### Endpoints
#### Events

`POST /events`

`GET /events`

`GET /events/{id}`

`PUT /events/{id}`

`DELETE /events/{id}`

#### Sales

`POST /sales`

`GET /sales`

`GET /sales/{id}`

`PUT /sales/{id}`

`DELETE /sales/{id}`

---

**Como Executar:**

#### 1. Clonar o repositório
```

git clone git@github.com:Ivynaaa/web-java-spring.git

```

#### 2. Inicie o banco de Dados
```

docker-compose -f docker-compose-dev.yml up --build

```

**Os seguintes serviços estarão disponíveis, inicialize-os nessa ordem:**

* Nameserver
* Gateway
* Sales
* Users

Após iniciar o backend teste a aplicação utilizando o arquivo event.http e sales.http
