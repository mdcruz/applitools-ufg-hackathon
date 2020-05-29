/// <reference types="cypress" />

import { sizes, viewports } from '../../../utils/device-utils';

const allViewports = [viewports.DESKTOP, viewports.TABLET, viewports.MOBILE];

const elements = [
  {
    name: 'Wishlist Icon',
    id: '#A__wishlist__52',
    isDisplayedOn: [...allViewports],
  },
  {
    name: 'Basket Count',
    id: '#A__cartbt__49 strong',
    isDisplayedOn: [...allViewports],
  },
  {
    name: 'Shoe Name',
    id: '#shoe_name',
    isDisplayedOn: [...allViewports],
  },
  {
    name: 'Shoe Image',
    id: '#shoe_img',
    isDisplayedOn: [...allViewports],
  },
  {
    name: 'Shoe Rating',
    id: '#SPAN__rating__76',
    isDisplayedOn: [...allViewports],
  },
  {
    name: 'Shoe Description',
    id: '#P____83',
    isDisplayedOn: [...allViewports],
  },
  {
    name: 'Shoe Size',
    id: '.nice-select.wide > .current',
    isDisplayedOn: [...allViewports],
  },
  {
    name: 'Shoe Quantity',
    id: '#quantity_1',
    isDisplayedOn: [...allViewports],
  },
  {
    name: 'Shoe Old Price',
    id: '#old_price',
    isDisplayedOn: [...allViewports],
  },
  {
    name: 'Shoe New Price',
    id: '#new_price',
    isDisplayedOn: [...allViewports],
  },
  {
    name: 'Shoe Discount',
    id: '#discount',
    isDisplayedOn: [...allViewports],
  },
  {
    name: 'Add to Cart Button',
    id: '#DIV__btnaddtoca__113',
    isDisplayedOn: [...allViewports],
  },
];

describe(`AppliFashion V${Cypress.env(
  'VERSION'
)} Task 3 - Product Details Test`, () => {
  sizes.forEach((size) => {
    const { viewport, device } = size;

    before(() => {
      cy.visitViewport(device, Cypress.env('APP_NAME'));
      cy.get('#product_1').click();
      cy.url().should('contain', Cypress.env('PRODUCT_DETAILS_URL'));
    });

    elements.forEach((element) => {
      const { name, id, isDisplayedOn } = element;
      it(`should display ${name} appropriately on product details page on ${viewport} - ${device} device - ${Cypress.env(
        'BROWSER'
      )} browser`, () => {
        const assertionString = isDisplayedOn.includes(viewport)
          ? 'be.visible'
          : 'not.be.visible';

        cy.get(id).should(assertionString);

        // Bug ID-2
        if (name === 'Shoe Size') {
          cy.get(id).should('have.text', 'Small (S)');
        }
      });
    });
  });
});
