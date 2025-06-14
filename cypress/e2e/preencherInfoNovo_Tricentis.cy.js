describe('Preencher informações - Sample App Tricentis - ', () => {
  it('Preenchendo informações com o novo fluxo..', () => {
    // Arrange - Preparação
      cy.acessarSite();
      cy.generateUserData().then((user) => {
      
      // Act - Execução
      cy.preencherInfoVehicle(user.vehicle);
      
      //  Assert - Validação após veículo
      cy.url().should('include', 'app.php');
      cy.get('#enterinsurantdata').should('be.visible');

      //  Act
      cy.preencherInfoInsurant(user);

      //  Assert após insurant
      cy.get('#enterproductdata').should('be.visible');

      //  Act
      cy.preencherInfoProduct();

      // Assert após produto
      cy.get('#selectpriceoption').should('be.visible');

      // Act
      cy.selectPriceOption();

      // Assert final
      cy.contains('Silver').should('be.visible');
      cy.contains('Gold').should('be.visible');
      cy.contains('Platinum').should('be.visible');
      cy.contains('Ultimate').should('be.visible');

    });
  });
});
