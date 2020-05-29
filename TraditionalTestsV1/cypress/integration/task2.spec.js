/// <reference types="cypress" />

import { sizes, viewports } from '../support/browser-util';

describe(`AppliFashion V${Cypress.env(
  'VERSION'
)} Task 2 - Shopping Experience Test`, () => {
  sizes.forEach((size) => {
    const { viewport, device } = size;

    it(`should filter black shoes correctly on ${viewport} - ${device} device - ${Cypress.env(
      'BROWSER'
    )} browser`, () => {
      cy.visitViewport(device, Cypress.env('APP_NAME'));

      if ([viewports.MOBILE, viewports.TABLET].includes(viewport)) {
        cy.get('#ti-filter').click();
      }

      cy.get('#colors__Black').click();
      cy.get('#filterBtn').click();
      cy.get('.grid_item').should('have.length', 2);
    });
  });
});
