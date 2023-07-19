/// <reference types = "cypress" />

export default class landingPage {
    navigateLanding(){
        cy.visit('https://www.microapp.io/')
    }

    login(){
        cy.contains('Login').click();
    }

    validateSuccessfulLogin(){
        cy.url().should('eq', 'https://www.microapp.io/workspace')
    }

    logoNavbarClick(){
        cy.get('a > img').click()
    }

    appsNavbarClick(){
        cy.get('[href="/apps"] > .mantine-Text-root').click()
    }

    aboutNavbarClick(){
        cy.contains('About').click()
    }

    searchInputNavbar(string){
        cy.get(':nth-child(2) > .mantine-Input-wrapper > .mantine-Input-input').type(string,'{enter}')
    }
    

}