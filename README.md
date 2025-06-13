# 🚗 Automação de Testes com Cypress - Sample App Tricentis + Jenkins (CI Docker)

Este projeto automatiza o preenchimento de formulários no site **Sample App Tricentis**, utilizando **Cypress** para automação de testes, **Faker.js** para geração dinâmica de dados e **Jenkins via Docker** para CI local.

---

## ✅ Tecnologias Utilizadas

- Node.js **v22.13.1**
- Cypress
- Faker.js
- JavaScript ES6
- Jenkins (Docker)

---

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) versão **22.13.1**
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- Git

Verifique se possui o Node instalado:

```bash
node -v
```

---

## ✅ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/kfdev1996/automation_SampleApp_Jenkins.git
cd seu-repositório

2. Instale as dependências:

```bash
npm install
```

---

## ✅ Execução dos Testes

### Modo interativo:

```bash
npx cypress open
```

### Modo headless:

```bash
npx cypress run
```

---

## ✅ Estrutura do Projeto

- `acessarSite`: Acessa a página inicial.
- `preencherInfoVehicle`: Preenche dados do veículo.
- `preencherInfoInsurant`: Preenche dados do segurado.
- `preencherInfoProduct`: Preenche dados do seguro.
- `selectPriceOption`: Valida as opções de preços disponíveis.

---

---

## 🐳 Como instalar o Docker

O Docker é necessário para executar o Jenkins em ambiente local via container.

### 🔗 Download do Docker

Acesse o link abaixo de acordo com seu sistema operacional:

- [Docker para Windows](https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe)
- [Docker para macOS](https://www.docker.com/products/docker-desktop)
- [Docker para Linux](https://docs.docker.com/engine/install/)

> Após a instalação, abra o Docker Desktop e mantenha-o em execução.

Verifique se está funcionando com:

```bash
docker --version
```

Você deverá ver algo como:

```
Docker version 24.x.x, build xxxxx
```

## ✅ Jenkins + Docker para CI Local

### Subindo Jenkins com Docker

```bash
docker run -d -p 8080:8080 -p 50000:50000 --name jenkins   -v jenkins_home:/var/jenkins_home   jenkins/jenkins:lts
```

Acesse: http://localhost:8080

### Pipeline Jenkins (freestyle ou shell)

Configure um projeto no Jenkins com os seguintes passos:

```bash
npm install
npx cypress run
```

> 💡 Use o plugin NodeJS no Jenkins com a versão **22.13.1**

---

## ✅ GitHub Actions (opcional)

Se desejar rodar também via GitHub Actions, use:

```yaml
name: Run Cypress Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 22
      - run: npm install
      - run: npx cypress run
```


## 📊 Gerando e Visualizando Relatórios com Allure

Este projeto utiliza o **Allure Report** para geração de relatórios interativos dos testes.

### ✅ Instalação do Allure

Você pode instalar o Allure de duas formas:

#### ▶️ Usando NPM (recomendado)

```bash
npm install -g allure-commandline --save-dev
```

#### ▶️ Usando Chocolatey (Windows)

```bash
choco install allure
```

Verifique a instalação com:

```bash
allure --version
```

---

### ▶️ Executando o relatório

Após rodar os testes, execute:

```bash
allure serve allure-results
```

Isso irá abrir o navegador automaticamente com o relatório interativo.

#### Alternativa (gerar manualmente):

```bash
allure generate allure-results --clean -o allure-report
allure open allure-report
```

> 💡 Se estiver usando o plugin `@shelex/cypress-allure-plugin`, verifique se ele está corretamente configurado no `cypress.config.js` e se a pasta `allure-results` está sendo gerada.

---

## ✅ Autor

Kaíque Fernandes  
[LinkedIn](https://www.linkedin.com/in/kaiquefernandess)  
[GitHub](https://github.com/kfdev1996)

---


