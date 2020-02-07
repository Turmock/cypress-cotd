describe('CBOT Price Table UI', () => {
  const localUrl = `${Cypress.env('localUrl')}`;
  const webUrl = `${Cypress.env('webUrl')}`;

  describe('Navigate to COTD homepage and create store', () => {
    beforeEach(() => {
      cy.visit(webUrl);
    });

    it('Should load the create store page on home', () => {
      cy.get('.store-selector input').should('exist');
      cy.get('button').should('contain', 'Visit Store');
    });

    it('Should have a randomly generated value loaded in the input', () => {
      let storeName1;
      let storeName2;
      cy.get('.store-selector input').should('exist');
      cy.get('button').should('contain', 'Visit Store');
    });
  });
});
