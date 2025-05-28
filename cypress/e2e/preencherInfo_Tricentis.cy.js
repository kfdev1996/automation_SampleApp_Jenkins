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