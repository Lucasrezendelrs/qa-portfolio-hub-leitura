import {userAdmin, userPadrao} from '../../support/factories'
describe('Adicionar um novo livro', function () {
  before(function () {
    cy.apiLogin(userAdmin);
    cy.ListUsers(userAdmin.email);

  })
  context.only('Cadastro válido com usuário administrador', function () {
    const book = {
      title: 'Livro de Teste',
      author: 'Autor de Teste',
      category: 'Ficção',
      year: 2021,
      pages: 300,
      copies: 5
    }
    beforeEach(function () {

      cy.task('removeBook', { title: book.title, author: book.author })
    })

    it('Deve cadastrar com sucesso', function () {
      cy.visit('admin-books.html');

      cy.url().should('include', 'admin-books.html');
      cy.url().should('not.include', '/login');

      cy.get('.btn-success').click();
      cy.get('.modal-content').should('be.visible');

      cy.wait(500);

      cy.get('#book-title')
      .should('be.visible')
      .and('be.enabled')
      .clear()
      .type(book.title, { delay: 100 });

      cy.get('#book-author').type(book.author);
      cy.get('#book-category').select(book.category);
      cy.get('#book-year').type(book.year);
      cy.get('#book-pages').type(book.pages);
      cy.get('#book-copies').type(book.copies);

      cy.get('#save-book-btn').click();
      // Adicione validações após o cadastro, se necessário

      cy.get('.alert-success')
      .should('be.visible')
      .and('contain', 'Livro adicionado com sucesso!');
    })
  })
  context('Cadastro sem preencher Título', function () {
        //cy.apiLogin(userPadrao);


  })
})