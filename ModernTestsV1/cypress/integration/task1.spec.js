/// <reference types="cypress" />

describe(`AppliFashion V${Cypress.env(
  'VERSION'
)} Task 1 - Cross browser elements test`, () => {
  it('should display the hackathon landing page on different viewports', () => {
    cy.eyesOpen({
      testName: 'Task 1',
      stepName: 'Cross-Device Elements Test',
    });
    cy.viewport(800, 600);
    cy.visit(Cypress.env('APP_NAME'));
    cy.eyesCheckWindow();
    cy.eyesClose();
  });
});
