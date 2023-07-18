/// <reference types = "cypress" />

export default class loginPage{
    navigateLogin(){
        cy.visit('https://microappai.us.auth0.com')
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