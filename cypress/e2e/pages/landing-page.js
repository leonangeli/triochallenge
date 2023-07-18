/// <reference types = "cypress" />

export default class landingPage {
    navigateLanding(){
        cy.visit('https://www.microapp.io/')
    }

    login(){
        cy.contains('Login').click();
    }

    validateSuccessfulLogin(){
        cy.get('[class="mantine-Text-root mantine-gc4o2k"]').should('have.text', 'leonangeli@trio.com')
    }
    

}