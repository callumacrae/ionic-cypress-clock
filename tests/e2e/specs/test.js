// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.clock();
    cy.visit('/')
    cy.contains('ion-content', 'Tab 1 page')
  })
})
