/// <reference types="cypress" />

describe(`AppliFashion V${Cypress.env(
  'VERSION'
)} Task 2 - Shopping Experience Test`, () => {
  it('should filter black shoes correctly on different viewports', () => {
    cy.eyesOpen({
      testName: 'Task 2',
      stepName: 'Cross-Device Elements Test',
    });
    cy.viewport(800, 600);
    cy.visit(Cypress.env('APP_NAME'));
    cy.get('.ti-filter').click();
    cy.get('#colors__Black').click();
    cy.get('#filterBtn').click();
    cy.eyesCheckWindow();
    cy.eyesClose();
  });
});
