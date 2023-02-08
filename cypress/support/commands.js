// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('fillMandatoryFieldsAndSubmit', ({nome,sobrenome, email, telefone}) => {     
    cy.get('#firstName').should('be.visible').type(nome).should('have.value', nome)
    cy.get('#lastName').should('be.visible').type(sobrenome).should('have.value', sobrenome)
    cy.get('#email').should('be.visible').type(email).should('have.value', email)
    cy.get('#phone').should('be.visible').type(telefone).should('have.value', telefone)
    cy.get('#email-checkbox').check().should('be.checked')
    cy.get('#open-text-area').should('be.visible').type('teste').should('have.value', 'teste')
    cy.contains('button','Enviar').click()
})

