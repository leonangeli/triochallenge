/// <reference types = "cypress" />

describe('Login tests', () => {
  it('Logins succesfully with valid credentials', () => {
    cy.visit('https://www.microapp.io/')
  })
})