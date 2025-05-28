import { faker } from "@faker-js/faker";

Cypress.Commands.add('acessarSite', () =>{

        cy.visit("https://sampleapp.tricentis.com/101/app.php");
        
});

Cypress.Commands.add('preencherInfoVehicle',()=>{

        cy.location('pathname').should('eq','/101/app.php');
        cy.get("#make").select('Porsche');
        cy.get('#model').select('Moped');
        cy.get('#cylindercapacity').type(faker.number.int({min:1,max:2000}));
        cy.get('#engineperformance').type(faker.number.int({min:1,max:2000}));
        const dataFabricacao = faker.date.between({ from: '01-29-1886', to: '05-26-2025' });
        const dataString = dataFabricacao.toLocaleDateString('en-US');  
        cy.get('#dateofmanufacture').type(dataString);
        cy.get("#numberofseats").select('4');
        cy.get("#righthanddriveyes").check({force: true});
        cy.get('#numberofseatsmotorcycle').select('3');
        cy.get('#fuel').select('Diesel');
        cy.get('#payload').type(faker.number.int({min:1,max:1000}));
        cy.get('#totalweight').type(faker.number.int({min:100,max:50000}));
        cy.get('#listprice').type(faker.number.int({min:500,max:100000}));
        cy.get('#annualmileage').type(faker.number.int({min:100,max:100000}));
        cy.contains('Next').click();

});

Cypress.Commands.add('preencherInfoInsurant',()=>{

        const streetAddress = faker.location.streetAddress();
        const zipCode = faker.number.int({ min: 1000, max: 99999999 }); 
        const city = faker.location.city();
        const website = faker.internet.url();
        const oldDateofBirth = faker.date.between({ from: '1954-01-01', to: '2007-12-31' });
        const newDateofBirth = oldDateofBirth.toLocaleDateString('en-US'); 
        const primeiroNome = faker.person.firstName()
        const ultimoNome = faker.person.firstName()
        cy.get('#firstname').type(primeiroNome);
        cy.get('#lastname').type(ultimoNome);
        cy.get('#birthdate').type(newDateofBirth);
        cy.get("#gendermale").check({force:true});
        cy.get('#streetaddress').type(streetAddress);
        cy.get('#country').select('Brazil');
        cy.get('#zipcode').type(zipCode.toString());
        cy.get('#city').type(city);
        cy.get("#occupation").select('Farmer');
        cy.get("#speeding").check({force: true});
        cy.get('#website').type(website);
        cy.get('#nextenterproductdata').click();

});

Cypress.Commands.add('preencherInfoProduct', ()=>{

        const today = new Date();
        today.setMonth(today.getMonth() + 2); 
        const futureDate = today;
        const newStartDate = futureDate.toLocaleDateString('en-US'); 
        cy.get('#startdate').type(newStartDate.toString());
        cy.get("#insurancesum").select('25000000');
        cy.get("#meritrating").select('Malus 14');
        cy.get("#damageinsurance").select('Partial Coverage');
        cy.get('#EuroProtection').check({force: true});
        cy.get("#courtesycar").select('Yes');
        cy.get('#nextselectpriceoption').should('be.visible').click();
        
});

Cypress.Commands.add('selectPriceOption', ()=>{

        cy.contains('Silver').should('be.visible');
        cy.contains('Gold').should('be.visible');
        cy.contains('Platinum').should('be.visible');
        cy.contains('Ultimate').should('be.visible');

});

