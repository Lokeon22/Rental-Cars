# Rental Cars

Aplicação para gerenciamento de uma loja de carros, utilizando todos os conceitos de SSR e server actions do NEXT 13.

⚠️ Não hospedado até o momento.

## 💻 Sobre

Nesse projeto foi utilizada a nova funcionalidade de server actions, onde todas as requisições para a API como o cadastro e aluguel do carro estão sendo feitas pelo dataForm, não sendo necessário nenhuma interatividade no client_side.

No back-end temos um user_admin responsável por gerenciar toda a loja. Acesse o repositório da API clicando [aqui](https://github.com/Lokeon22/Rental-Cars-API).

Obs: Projeto com um CSS simples mas com todas as funcionalidades cruciais para uma aplicação real.

```bash
# Clone o projeto
Frontend - $ git clone https://github.com/Lokeon22/Rental-Cars.git
Backend -- $ git clone https://github.com/Lokeon22/Rental-Cars-API.git

# Instale as dependências
$ npm install

# Iniciando local
Frontend - $ npm run dev
Backend -- $ npm run migrate / $ npm run dev
Backend -- Para executar os testes - $ npm run test

# O servidor irá rodar em:
Frontend - <Local: http://localhost:3000 />
Backend -- <Local: http://localhost:8080 />
```

### Principais Funcionalidades

- Controle de estoque e alugueis dos carros.
- Armazenamento dos conteúdos via Cookies.
- Filtro por buscas e paginação dinâmica.
- Aluguel de veículo com sistema de data e calculo do preço / retorno.

### Admin alterando informações e estoque do carro disponível.

![stock_gif](https://github.com/Lokeon22/Project-Films/assets/54092771/dad54c0c-03d1-43be-b2c9-0c46e97f1fba)

### Aluguel do veículo.

![aluguel_gif](https://github.com/Lokeon22/Project-Films/assets/54092771/ce3d926b-8f38-4e0f-98fb-37961e8668c7)

#### Exemplo do controle de alugueis do ADMIN.

![admin_alugueis](https://github.com/Lokeon22/Project-Films/assets/54092771/ae8b5273-1450-40f8-a257-7dd6f16afd9d)

#### Aluguel pelo usuário.

![usuario_aluguel](https://github.com/Lokeon22/Project-Films/assets/54092771/60e7dcf1-0b56-499d-bab3-422e36b566d0)

## 🧾 Stack utilizada

- [Next](https://nextjs.org)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind](https://tailwindcss.com)

## 📀 Stack API

- [Node](https://nodejs.org/en)
- [TypeScript](https://www.typescriptlang.org)
- [Knex](https://knexjs.org)
- [Express](https://expressjs.com/pt-br)
- [JEST](https://jestjs.io/pt-BR/)
- [Multer](https://www.npmjs.com/package/multer)

### Acesse o repositório da API clicando [aqui](https://github.com/Lokeon22/Rental-Cars-API)

Com 💛 por Gabriel
