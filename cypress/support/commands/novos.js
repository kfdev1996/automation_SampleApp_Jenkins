import { faker } from "@faker-js/faker";

// Gera dados de usuário e veículo
Cypress.Commands.add('generateUserData', () => {
  const user = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    birthDate: faker.date.between({ from: '1955-01-01', to: '2007-12-31' }).toLocaleDateString('en-US'),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      zipCode: faker.number.int({ min: 1000, max: 99999999 }).toString(),
      country: 'Brazil'
    },
    website: faker.internet.url(),
    vehicle: {
      cylinderCapacity: faker.number.int({ min: 1, max: 2000 }),
      enginePerformance: faker.number.int({ min: 1, max: 2000 }),
      manufactureDate: faker.date.between({ from: '01-29-1886', to: '05-26-2025' }).toLocaleDateString('en-US'),
      payload: faker.number.int({ min: 1, max: 1000 }),
      totalWeight: faker.number.int({ min: 100, max: 50000 }),
      listPrice: faker.number.int({ min: 500, max: 100000 }),
      annualMileage: faker.number.int({ min: 100, max: 100000 }),
    }
  };
  return cy.wrap(user, { log: false });
});

// Acessar o site
Cypress.Commands.add('novoAcessarSite', () => {
  cy.visit("https://sampleapp.tricentis.com/101/app.php");
});

// Preencher info do veículo
Cypress.Commands.add('novoPreencherInfoVehicle', (vehicle) => {
  cy.location('pathname').should('eq', '/101/app.php');
  cy.get("#make").select('Porsche');
  cy.get('#model').select('Moped');
  cy.get('#cylindercapacity').type(vehicle.cylinderCapacity);
  cy.get('#engineperformance').type(vehicle.enginePerformance);
  cy.get('#dateofmanufacture').type(vehicle.manufactureDate);
  cy.get("#numberofseats").select('4');
  cy.get("#righthanddriveyes").check({ force: true });
  cy.get('#numberofseatsmotorcycle').select('3');
  cy.get('#fuel').select('Diesel');
  cy.get('#payload').type(vehicle.payload);
  cy.get('#totalweight').type(vehicle.totalWeight);
  cy.get('#listprice').type(vehicle.listPrice);
  cy.get('#annualmileage').type(vehicle.annualMileage);
  cy.contains('Next').click();
});

// Preencher info do segurado
Cypress.Commands.add('novoPreencherInfoInsurant', (user) => {
  cy.get('#firstname').type(user.firstName);
  cy.get('#lastname').type(user.lastName);
  cy.get('#birthdate').type(user.birthDate);
  cy.get("#gendermale").check({ force: true });
  cy.get('#streetaddress').type(user.address.street);
  cy.get('#country').select(user.address.country);
  cy.get('#zipcode').type(user.address.zipCode);
  cy.get('#city').type(user.address.city);
  cy.get("#occupation").select('Farmer');
  cy.get("#speeding").check({ force: true });
  cy.get('#website').type(user.website);
  cy.get('#nextenterproductdata').click();
});

// Preencher info do produto
Cypress.Commands.add('novoPreencherInfoProduct', () => {
  const today = new Date();
  today.setMonth(today.getMonth() + 2);
  const futureDate = today.toLocaleDateString('en-US');

  cy.get('#startdate').type(futureDate);
  cy.get("#insurancesum").select('25000000');
  cy.get("#meritrating").select('Malus 14');
  cy.get("#damageinsurance").select('Partial Coverage');
  cy.get('#EuroProtection').check({ force: true });
  cy.get("#courtesycar").select('Yes');
  cy.get('#nextselectpriceoption').should('be.visible').click();
});

// Selecionar opções de preço
Cypress.Commands.add('novoSelectPriceOption', () => {
  ['Silver', 'Gold', 'Platinum', 'Ultimate'].forEach(option => {
    cy.contains(option).should('be.visible');
  });
});
