import signup from "../../support/signup"
import {userAdmin} from '../../support/factories'

describe('Criar conta', function () {
    before(function () {
        cy.fixture('signup').then(function (signup) {
            this.valid = signup.valid
            this.invalidPassword = signup.invalidPassword
            this.invalidTerms = signup.invalidTerms
        })

    })
    context.only('Cadastro válido com todos os campos preenchidos corretamente ', function () {
        before(function () {
            /*cy.task('removeUser', this.valid.email).then(function (result) {
                console.log(result)
            })*/
            cy.apiLogin(userAdmin);
            cy.DeleteUser(this.valid.email); 
        })
        it('Deve cadastrar com sucesso', function () {
            signup.go()
            signup.form(this.valid)
            signup.submit()

            cy.url().should('include', '/dashboard.html')
            cy.get('span[id=user-name]')
                .should('be.visible')
                .and('have.text', this.valid.name)


        })

    })
    context('Cadastro sem preencher Nome Completo  ', function () {
        const alert = 'Nome deve ter pelo menos 2 caracteres'
        const name = " "


        it('Deve exibir ' + alert, function () {
            this.valid.name = name
            signup.go()
            signup.form(this.valid)
            signup.submit()
            
            cy.get('#name + .invalid-feedback')
                .should('be.visible')
                .and('have.text', alert)

        })

    })
    context('Cadastro com Nome Completo menor que 2 caracteres', function () {
        const alert = 'Nome deve ter pelo menos 2 caracteres'
        const name = 'A'


        it('Deve exibir ' + alert, function () {
            this.valid.name = name

            signup.go()
            signup.form(this.valid)
            signup.submit()

            cy.get('#name + .invalid-feedback')
                .should('be.visible')
                .and('have.text', alert)

        })

    })
    context('Cadastro sem preencher Email', function () {
        const alert = 'Email válido é obrigatório'
        const email = " "


        it('Deve exibir ' + alert, function () {
            this.valid.email = email

            signup.go()
            signup.form(this.valid)
            signup.submit()

            cy.get('#email + .invalid-feedback')
                .should('be.visible')
                .and('have.text', alert)

        })

    })

    context('Cadastro com formato inválido de E-mail', function () {
        const emails = [
            'lucas.com.br',
            'yahoo.com',
            '@gmail.com',
            '@',
            'lucas@',
            '111',
            '&*^&&^*',
            'xpto123'
        ]
        beforeEach(function () {
            signup.go()
        })
        emails.forEach(function (email) {
            const alert = 'Email válido é obrigatório'

            it('Não deve criar conta com o email invalido: ' + email, function () {
                this.valid.email = email

                signup.form(this.valid)
                signup.submit()

                cy.get('#email + .invalid-feedback')
                    .should('be.visible')
                    .and('have.text', alert)

            })

        })
    })
    context('Cadastro sem preencher Senha', function () {
        const alert = 'Por favor, crie uma senha com pelo menos 6 caracteres.'
        const password = " "


        it('Deve exibir ' + alert, function () {
            this.valid.password = password

            signup.go()
            signup.form(this.valid)

            cy.get('[id=password]')
                .clear() // garante que o campo fique vazio
                .should('have.value', '')

            signup.submit()

            cy.get('#password-strength + .invalid-feedback')
                .should('be.visible')
                .and('have.text', alert)

        })

    })
    context('Cadastro com senha fraca', function () {
        const alert = 'Por favor, crie uma senha com pelo menos 6 caracteres.'
        const password = "123"


        it('Deve exibir ' + alert, function () {
            this.valid.password = password
            this.valid.confirmPassword = password

            signup.go()
            signup.form(this.valid)


            signup.submit()

            cy.get('#password-strength + .invalid-feedback')
                .should('be.visible')
                .and('have.text', alert)

        })

    })

    context('Cadastro com Senha e Confirmação diferentes', function () {
        const alert = 'Senhas não coincidem'

        it('Deve exibir ' + alert, function () {
            signup.go()
            signup.form(this.invalidPassword)

            signup.submit()

            cy.get('#confirm-password + .invalid-feedback')
                .should('be.visible')
                .and('have.text', alert)

        })

    })

    context('Cadastro sem marcar checkbox de aceite dos termos ', function () {
        const alert = 'Você deve aceitar os termos de uso'


        it('Deve exibir ' + alert, function () {
            signup.go()
            signup.form(this.invalidTerms)

            signup.submit()

            cy.get('#terms-agreement + .invalid-feedback')
                .should('be.visible')
                .and('have.text', alert)

        })

    })



})