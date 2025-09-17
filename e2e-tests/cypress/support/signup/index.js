
class singnupPage {
  go() {
    cy.visit('/register.html')
  }
  form(user) {
    cy.get('[id=name]').clear().type(user.name)
    cy.get('[id=email]').clear().type(user.email)
    cy.get('[id=phone]').clear().type(user.phone)
    cy.get('[id=password]').clear().type(user.password, {log:false})
    cy.get('[id=confirm-password]').clear().type(user.confirmPassword, {log:false})

    //cy.get('[id=terms-agreement]').check()
    cy.get('[id=terms-agreement]')[user.terms ? 'check' : 'uncheck']()


  }
  submit() {
    cy.get('[id=register-btn]').click()

  }
}

export default new singnupPage()
