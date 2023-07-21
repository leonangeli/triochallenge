import landingPage from "../pages/landing-page"
import loginPage from "../pages/login-page"


describe('Login Test', () => {
    const ln = new loginPage()
    const lp = new landingPage()

    //Login
    it('should intercept and login with valid credentials', () => {
        ln.interceptLogin()
        
        cy.origin('https://microappai.us.auth0.com', () => {
            cy.get('input[id="username"]').type('leonangelitrio');
            cy.get('input[id="password"]').type('Leonangeli123!');
            cy.contains('Continue').click({force: true});
       })

       lp.validateSuccessfulLogin()
    })

    it('should intercept and login with invalid credentials', () => {
        ln.interceptLogin()
        
        cy.origin('https://microappai.us.auth0.com', () => {
            cy.get('input[id="username"]').type('$#@$@@$$#@%%^^');
            cy.get('input[id="password"]').type('wrongpass');
            cy.contains('Continue').click({force: true});
            cy.contains('Wrong username or password').should('be.visible')
       })
       
    })

})