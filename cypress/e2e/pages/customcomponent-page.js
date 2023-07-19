/// <reference types = "cypress" />

export default class customcomponentPage{

    typePrompt(prompt){
        cy.wait(2000)
        cy.get('.mantine-ox9kz1').click({force: true}).type(prompt)
    }

    makeMagicClick(){
        cy.contains('MAKE MAGIC').click({force: true})
    }

    validateSuccessfulComponentCreation(){
        cy.get('.mantine-1avyp1d > .mantine-UnstyledButton-root', { timeout: 10000 }).should('be.visible')
        //cy.contains('Macro Nutrient Calculator', { timeout: 10000 }).should('be.visible')
    }

}