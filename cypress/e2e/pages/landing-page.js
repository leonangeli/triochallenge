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
        cy.url().should('eq', 'https://www.microapp.io/')
    }

    appsNavbarClick(){
        cy.get('[href="/apps"] > .mantine-Text-root').click()
        cy.url().should('eq', 'https://www.microapp.io/apps')
    }

    aboutNavbarClick(){
        cy.contains('About').click()
        cy.url().should('eq', 'https://www.microapp.io/about')
    }

    workspaceDropdownClick(username){
        cy.contains(username).click()
        cy.get('[href="/workspace"]').click()
        cy.url().should('eq', 'https://www.microapp.io/workspace')
    }

    userProfileDropdownClick(username){
        cy.contains(username).click()
        cy.get('[href="/user/64b6e4a19ef2901040036efb"]').click()
        cy.url().should('include', 'https://www.microapp.io/user')

    }

    searchInputNavbar(string1, string2){
        cy.get('a > img').click()
        cy.wait(4000)
        cy.get(':nth-child(2) > .mantine-Input-wrapper > .mantine-Input-input').type(string1,'{enter}')
        //cy.should('eq',string2).click({force: true})
    }

    customComponentClick(){
        cy.get('.mantine-1ryt1ht > .mantine-Text-root').click({force: true})
        cy.url().should('include', 'https://www.microapp.io/apps/ai-component-generator')
    }


}