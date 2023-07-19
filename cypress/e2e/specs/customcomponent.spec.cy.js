import customcomponentPage from "../pages/customcomponent-page"
import landingPage from "../pages/landing-page"
import loginPage from "../pages/login-page"

describe('Menu Navigation Test', () => {
    const ln = new loginPage()
    const lp = new landingPage()
    const cp = new customcomponentPage()
    it('should navigate through all menu items', () => {
        //Login
        ln.interceptLogin()
        
        cy.origin('https://microappai.us.auth0.com', () => {
            cy.get('input[id="username"]').type('leonangelitrio');
            cy.get('input[id="password"]').type('Leonangeli123!');
            cy.contains('Continue').click({force: true});
       })

       lp.validateSuccessfulLogin()
       
       //Custom Component creation 
       lp.logoNavbarClick();
       lp.customComponentClick();
       cp.typePrompt('A macro nutrient calculator');
       cp.makeMagicClick();
       cp.validateSuccessfulComponentCreation();

    })

})