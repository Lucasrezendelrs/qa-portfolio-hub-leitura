import login from "../../support/login"
describe('Login', function () {
    // usar fixture para separar dados do teste
    before(function () {
        cy.fixture('users').then(function (users) {
            this.valid = users.valid
            this.emailsInvalid = users.emailsInvalid
            this.validEmail = users.validEmail
            this.invalidPassword = users.invalidPassword
            this.invalidEmail = users.invalidEmail

        })
    })
    context('Login válido com credenciais corretas', function () {
        it('Deve logar com sucesso e abrir painel administrativo', function () {

            login.go()
            login.form(this.valid)

            login.submit()
            //cy.url().should('not.include', '/login.html')

            cy.url().should('include', '/admin-dashboard.html')

            cy.get('.modal-title').should('be.visible')
            cy.get('.modal-footer > .btn').click()
            cy.get('h1').should('contain', 'Painel Administrativo')

            //cy.window().its('localStorage.authToken').should('exist')
        })
    })
    context('Login válido com e-mail em letras maiúsculas', function () {
        it('Deve logar com sucesso e abrir painel administrativo', function () {

            login.go()
            login.form(this.validEmail)

            login.submit()
            cy.url().should('include', '/admin-dashboard.html')

            cy.get('.modal-title').should('be.visible')
            cy.get('.modal-footer > .btn').click()
            cy.get('h1').should('contain', 'Painel Administrativo')

        })
    })
    context('Login inválido com senha incorreta', function () {
        const alert = 'Email ou senha incorretos.'
        it('Deve exibir ' + alert.toLowerCase(), function () {
            login.go()
            login.form(this.invalidPassword)

            login.submit()

            cy.get('#alert-container')
                .should('be.visible')
                .should('contain', alert)

        })

    })
    context('Login inválido com e-mail não cadastrado', function () {
        const alert = 'Email ou senha incorretos.'
        it('Deve exibir ' + alert.toLowerCase(), function () {
            login.go()
            login.form(this.invalidEmail)

            login.submit()

            cy.get('#alert-container')
                .should('be.visible')
                .should('contain', alert)

        })
    })
    context('Tentativa de login com campos em branco', function () {
       
        beforeEach(function () {
            login.go()
            login.submit()
        })
            it('Deve exibir mensagens de alerta' , function () {
                cy.get('#email + .invalid-feedback')
                    .should('be.visible')
                    .and('have.text', 'Por favor, insira um email válido.')
                cy.get('.input-group + .invalid-feedback')
                    .should('be.visible')
                    .and('have.text', 'Por favor, insira uma senha válida.')


            })


    })
    context('Tentativa de login com formato inválido de e-mail', function () {

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
            login.go()
        })
        emails.forEach(function (email) {
            const alert = 'Por favor, insira um email válido.'
            it('Não deve logar com o email invalido: ' + email, function () {
                this.emailsInvalid.email = email

                login.form(this.emailsInvalid)
                login.submit()


                cy.get('#email + .invalid-feedback')
                    .should('be.visible')
                    .and('have.text', alert)

            })

        })

    })



})
