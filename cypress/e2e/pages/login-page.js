/// <reference types = "cypress" />

export default class loginPage{
    interceptLogin(){
        cy.intercept('https://microappai.us.auth0.com/u/login?state=*').as('auth0Authorize')
        cy.visit('https://www.microapp.io/build')
        cy.wait(3009)
        cy.get('[href="/api/auth/login"').eq(0).click()
    }
    
    signUp(){
        cy.contains('Sign up').click();
    }
    
    setUsername(username){
        cy.get('input[id="username"]').type(username);
    }

    setPassword(password){
        cy.get('input[id="password"]').type(password)
    }



}