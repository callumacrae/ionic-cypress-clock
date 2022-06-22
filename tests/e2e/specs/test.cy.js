// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    // cy.clock(1655887663000);
    cy.visit('/')
    cy.contains('ion-content', 'Tab 1 page')

    cy.get('ion-button:contains("Open modal")').click();

    cy.get('.vc-day.day-23').click();

    cy.get('[data-test="output"]').should('contain', 'You selected 2022-06-23');
  })
})
