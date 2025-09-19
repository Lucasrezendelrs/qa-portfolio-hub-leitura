describe('Acesso à página de administração', function () {
  beforeEach(function () {
    const user = {
      email: 'admin@biblioteca.com',
      password: 'admin123',
      isAdmin: true
    }
    // Faz login via API antes de cada teste
    cy.apiLogin(user);
  })

  it('Cadastro válido com usuário administrador', function () {
    // Visita a página que requer autenticação de admin
    cy.visit('admin-books.html');



    // Verifica se chegou na página correta
    cy.url().should('include', 'admin-books.html');

    // Verifica se não foi redirecionado para login
    cy.url().should('not.include', '/login');

    cy.get('.btn-success')
      .click();

    cy.get('.modal-content')
      .should('be.visible');

    cy.get('[id=book-title]').type('Livro de Teste 2');
    cy.get('#book-author').type('Autor de Teste');
    cy.get('#book-category').select('Ficção');
    cy.get('#book-pages').type('300');
    cy.get('#book-copies').type('5');
    
    cy.get('#save-book-btn').click();

  


  })
})