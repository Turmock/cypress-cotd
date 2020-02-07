describe("CBOT Price Table UI", () => {
  const localUrl = `${Cypress.env("localUrl")}`;
  const webUrl = `${Cypress.env("webUrl")}`;

  describe("Navigate to COTD homepage and create store", () => {
    it("Should load the home page", () => {
      console.log(Cypress.env());
      cy.visit(localUrl);
      
      // cy.visit("https://cypress-cotd.micleners.com/");
    });
  });
});
