
class Login {
  go() {
    cy.visit('/login.html')
  }
  form(user) {
    cy.get('[id=email]').clear().type(user.email)
    cy.get('[id=password]').clear().type(user.password, { log: false })

  }
  submit() {
    cy.get('[id=login-btn]').click()

  }
}

export default new Login()
