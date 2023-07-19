import landingPage from "../pages/landing-page"
import loginPage from "../pages/login-page"


describe('Login Test', () => {
    const ln = new loginPage()
    const lp = new landingPage()

    //Login
    it('should intercept and login succesfully', () => {
        ln.interceptLogin()
        
        cy.origin('https://microappai.us.auth0.com', () => {
            cy.get('input[id="username"]').type('leonangelitrio');
            cy.get('input[id="password"]').type('Leonangeli123!');
            cy.contains('Continue').click({force: true});
       })

       lp.validateSuccessfulLogin()

    })

})