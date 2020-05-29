/// <reference types ="cypress" />

Cypress.Commands.add('visitViewport', (size, url) => {
  cy.viewport(size);
  cy.visit(url);
});
