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

Cypress.Commands.add('LoginWithValidCredential', (username, password) => {
    cy.get('#aid_username').clear
    cy.get('#aid_username').type(username, {force: true})
    cy.get('#aid_password').clear
    cy.get('#aid_password').type(password, {force: true})
    cy.contains('LOGIN').click()
})

Cypress.Commands.add('LoginWithValidUsername', (username, password) => {
    cy.get('#aid_username').clear
    cy.get('#aid_username').type(username, {force: true})
    cy.get('#aid_password').clear
    cy.get('#aid_password').type(password, {force: true})
    cy.contains('LOGIN').click()
})

Cypress.Commands.add('LoginWithValidPassword', (username, password) => {
    cy.get('#aid_username').clear
    cy.get('#aid_username').type(username, {force: true})
    cy.get('#aid_password').clear
    cy.get('#aid_password').type(password, {force: true})
    cy.contains('LOGIN').click()
})