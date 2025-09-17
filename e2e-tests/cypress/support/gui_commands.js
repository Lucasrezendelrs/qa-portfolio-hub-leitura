import login from "./login"
Cypress.Commands.add('loginUi', function (user) {

  login.go()
  login.form(user)
  login.submit()
  
})
