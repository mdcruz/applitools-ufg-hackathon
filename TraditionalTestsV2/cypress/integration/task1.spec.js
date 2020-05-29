/// <reference types="cypress" />

import { sizes, viewports } from '../../../utils/device-utils';

const elements = [
  {
    name: 'Search Bar',
    id: '#INPUTtext____42',
    isDisplayedOn: [viewports.DESKTOP, viewports.TABLET],
  },
  {
    name: 'Main Menu',
    id: '#NAV__colxlcollg__10',
    isDisplayedOn: [viewports.DESKTOP],
  },
  {
    name: 'Wishlist Icon',
    id: '#A__wishlist__52',
    isDisplayedOn: [viewports.DESKTOP],
  },
  {
    name: 'Product Filter',
    id: '#ASIDE__collg__67',
    isDisplayedOn: [viewports.DESKTOP],
  },
  {
    name: 'Basket Count',
    id: '#A__cartbt__49 strong',
    isDisplayedOn: [viewports.DESKTOP, viewports.TABLET],
  },
  {
    name: 'Grid View Tile Icon',
    id: '#I__tiviewgrid__202',
    isDisplayedOn: [viewports.DESKTOP],
  },
  {
    name: 'List View Tile Icon',
    id: '#A____203',
    isDisplayedOn: [viewports.DESKTOP],
  },
  {
    name: 'Teaser Icons',
    id: '#UL____269',
    isDisplayedOn: [viewports.TABLET, viewports.MOBILE],
  },
  {
    name: 'Filter Funnel Icon',
    id: '#ti-filter',
    isDisplayedOn: [viewports.TABLET, viewports.MOBILE],
  },
  {
    name: 'Filter Word Button',
    id: '#SPAN____208',
    isDisplayedOn: [viewports.TABLET],
  },
];

describe(`AppliFashion V${Cypress.env(
  'VERSION'
)} Task 1 - Cross browser elements test`, () => {
  sizes.forEach((size) => {
    const { viewport, device } = size;

    elements.forEach((element) => {
      const { name, id, isDisplayedOn } = element;
      it(`should display ${name} appropriately on ${viewport} - ${device} device - ${Cypress.env(
        'BROWSER'
      )} browser`, () => {
        cy.visitViewport(device, Cypress.env('APP_NAME'));

        const assertionString = isDisplayedOn.includes(viewport)
          ? 'be.visible'
          : 'not.be.visible';

        cy.get(id).should(assertionString);
      });
    });
  });
});
