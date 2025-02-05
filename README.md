# 🍔 Burger Byte API

Este repositório contém a **API** do projeto **Burger Byte**, um cardápio online para uma lanchonete fictícia. A API foi desenvolvida utilizando **Json-Server** para simular uma API REST, facilitando o desenvolvimento e os testes do frontend.

Acesse o **frontend** do projeto [aqui](https://github.com/Vitorialuz229/burgerbyte) e confira a interface do cardápio online!

## 🌐 **Deploy da Aplicação**

A aplicação foi **deployada no Vercel** e está disponível para acesso público através do link abaixo:

[🌐 Acesse o Cardápio Online - Vercel](https://burgerbyte-56bo.vercel.app/)

---

## 🛠️ **Tecnologias Utilizadas**

- **Json-Server**: Simulação de uma API REST para desenvolvimento.
- **Express**: Framework minimalista para criar rotas e configurar a API.
- **CORS**: Habilitado para permitir requisições de diferentes origens.

---

## 📝 **Endpoints da API**

A API simula o cardápio da lanchonete e permite consultar os itens disponíveis. Abaixo estão os principais endpoints da API:

### 1. **GET /hamburgueres**

Retorna todos os hambúrgueres disponíveis no cardápio.

**Resposta**:
```json
[
  {
    "id": 1,
    "name": "Hamburguer Smash",
    "description": "Smash suculento com carne 100% angus, queijo derretido, salada, cebola caramelizada e molho especial. Simples e irresistível! 🍔🔥",
    "price": 15.00,
    "image": "/assets/hamb1.png"
  },
  {
    "id": 2,
    "name": "Hamburguer Duplo",
    "description": "Duas suculentas carnes 100% bovina, queijo cheddar derretido, bacon crocante, cebola caramelizada e molho especial.",
    "price": 44.00,
    "image": "/assets/hamb2.png"
  }
]
```

--- 

## ⚡️ Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

1. Clone este repositório:

```bash
git clone https://github.com/Vitorialuz229/burgerbyte-api.git
cd burgerbyte-api

```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Inicie o servidor da API:

```bash
npm run dev
# ou
yarn run dev
A API estará disponível em: http://localhost:5000/
```

📝 Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

👨‍💻 Autor
Desenvolvido por Vitória Luz 🚀
