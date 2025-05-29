
# 🚗 Automação de Testes com Cypress - Sample App Tricentis

Este projeto automatiza o preenchimento de formulários no site **Sample App Tricentis**, utilizando **Cypress** para automação de testes e **Faker.js** para geração dinâmica de dados.

## ✅ Tecnologias Utilizadas

- Node.js **v22.13.1**
- Cypress
- Faker.js
- JavaScript ES6

## ✅ Pré-requisitos

- **Node.js** versão **22.13.1**

Para verificar se possui a versão correta:

```bash
node -v
```

Se não tiver, instale pelo [site oficial do Node.js](https://nodejs.org/en) ou utilize um gerenciador de versões como [nvm](https://github.com/nvm-sh/nvm).

## ✅ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/kfdev1996/automation_SampleApp
cd seu-repositorio
```

2. Instale as dependências:

```bash
npm install
```

### Dependências utilizadas

- Cypress:

```bash
npm install cypress --save-dev
```

- Faker.js:

```bash
npm install @faker-js/faker --save-dev
```

## ✅ Como Rodar os Testes

1. Abra o Cypress Test Runner:

```bash
npx cypress open
```

2. No painel que abrir, selecione o arquivo de teste correspondente para executar.

## ✅ Estrutura do Projeto

- `acessarSite`: Abre o site.
- `preencherInfoVehicle`: Preenche informações sobre o veículo.
- `preencherInfoInsurant`: Preenche informações do segurado.
- `preencherInfoProduct`: Preenche informações do produto.
- `selectPriceOption`: Valida as opções de preço.

## ✅ Descrição do Fluxo Automatizado

1. **Acessar o site**: https://sampleapp.tricentis.com/101/app.php
2. **Preencher informações do veículo**.
3. **Preencher informações do segurado**.
4. **Preencher informações do produto**.
5. **Validar opções de preços**: Silver, Gold, Platinum, Ultimate

## ✅ Exemplo de Execução no Código

```javascript
describe('Preencher informações - Sample App Tricentis', () => {
  
  before(() => {
    cy.acessarSite();
  });

  it('Preenchendo informações..', () => {
    cy.preencherInfoVehicle();
    cy.preencherInfoInsurant();   
    cy.preencherInfoProduct();
    cy.selectPriceOption();
  });
});
```

## ✅ Observações Importantes

- Todas as informações são geradas automaticamente via **Faker.js**.
- A data de início do seguro é sempre ajustada para **dois meses no futuro**.
- O projeto está compatível com **Node.js 22.13.1**.

## ✅ Dicas

- Para atualizar o Cypress:

```bash
npx cypress verify
```

- Para rodar em modo headless:

```bash
npx cypress run
```

## ✅ Autor

Kaíque Fernandes  
[LinkedIn](https://www.linkedin.com/in/kaiquefernandess)  
[GitHub](https://github.com/kfdev1996)

## ✅ Licença

Este projeto está sob a licença MIT.

## (Foi adicionado outro arquivo chamado preencherInfoNovo_Tricentis.cy.js com melhoria de estrutura em relação ao código antigo preencherInfo_Tricentis.cy.js).
