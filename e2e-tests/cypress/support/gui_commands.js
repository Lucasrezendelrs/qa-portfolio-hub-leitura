import login from "./login"
Cypress.Commands.add('loginUi', function (user) {

  login.go()
  login.form(user)
  login.submit()

})
Cypress.Commands.add('apiLogin', function (user) {
  const payload = {
    email: user.email,
    password: user.password
  }
  cy.request({
    method: 'POST',
    url: '/api/login',
    body: payload
      
  }).then((response) => {
    expect(response.status).to.eq(200)
    // Armazena o token de autenticação
    const { token, name } = response.body;


    
    // Define o token no localStorage
    window.localStorage.setItem('authToken', token);
    
    // Define cookies se necessário
    //cy.setCookie('auth_token', token);
    
    // Armazena dados do usuário se necessário
    window.localStorage.setItem('name', JSON.stringify(name));
    window.localStorage.setItem('isAdmin', JSON.stringify(true));
    window.localStorage.setItem('userId', JSON.stringify(1));
    // Define headers padrão para próximas requisições
    /*cy.intercept('**', (req) => {
      req.headers['Authorization'] = `Bearer ${token}`;
    });*/

      
  });      

});

