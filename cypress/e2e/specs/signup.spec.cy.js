import landingPage from "../pages/landing-page"
import loginPage from "../pages/login-page"

describe('Sign Up Test', () => {
    const ln = new loginPage()
    const lp = new landingPage()
    it('should intercept and Sign Up', () => {
        ln.interceptLogin()
        
        cy.origin('https://microappai.us.auth0.com', () => {
            cy.contains('Sign up').click({force: true});
            cy.get('input[id="username"]').type('newUser01');
            cy.get('input[id="email"]').type('newUser@gmail.com');
            cy.get('input[id="password"]').type('Password123!');
            cy.wait(4000)
            cy.scrollTo('bottom')
            cy.contains('Continue').click({force: true});           
       })
       lp.validateSuccessfulLogin()
    })

})