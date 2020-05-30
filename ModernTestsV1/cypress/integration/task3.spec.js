/// <reference types="cypress" />

describe(`AppliFashion V${Cypress.env(
  'VERSION'
)} Task 3 - Product Details Test`, () => {
  it('should display Product details page correctly', () => {
    cy.eyesOpen({
      testName: 'Task 3',
      stepName: 'Product Details Test',
    });
    cy.viewport(800, 600);
    cy.visit(Cypress.env('PRODUCT_DETAILS_URL'));
    cy.eyesCheckWindow();
    cy.eyesClose();
  });
});
