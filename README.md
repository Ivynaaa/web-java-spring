## Implementação do microsserviço de Vendas de Ingressos

Desenvolvido em Java utilizando o framework Spring Boot, Docker e arquitetura de microsserviços.


**Arquitetura de Microsserviços**

Users Service: Gestão de usuários e autenticação.

Sales Service: Regras de negócio para eventos e vendas de ingressos.

Gateway (Spring Cloud Gateway): Ponto único de entrada, roteamento e segurança.

Nameserver (Eureka): Descoberta de serviços para comunicação inter-serviços.

---

**Como Executar:**

Certifique-se de ter o Docker e Java instalado.

Na raiz do projeto, execute:

```
docker-compose -f docker-compose-dev.yml up --build
```
**Os seguintes serviços estarão disponíveis, inicialize-os nessa ordem:**

* Nameserver
* Gateway
* Sales
* Users
