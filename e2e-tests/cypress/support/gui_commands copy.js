Cypress.Commands.add('loginUi', (email, password) => {
    
  cy.visit('/login.html')

  cy.get('[id=email]').clear().type(email)
  cy.get('[id=password]').clear().type(password, { log: false })
  cy.get('[id=login-btn]').click()
})
