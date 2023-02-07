/// <reference types="Cypress" /> 

const textLong = 'Testando a página da central de atendimento ao cliente TAT by Walmir FilhoEste conteúdo foi inicialmente publicado na Newsletter da Talking About Testing. Uma dúvida que frequentemente surge entre QAs é: "Como configurar um pipeline de integração contínua para rodar testes em paralelo?"Vou demonstrar uma solução simples utilizando Cypress e GitHub Actions, porém, a mesma idéia pode ser utilizada independente do framework de testes e serviço de integração contínua escolhido.Obs.: Para que os testes '
const nome = 'Leonardo'
const sobrenome = 'Oliveira'
const email = 'leo@email.com'
const telefone = '1199558822'

describe('Central de Atendimento ao Cliente TAT', () => {

    beforeEach(() => cy.visit('./src/index.html'))

    it('Verificar o titulo da aplicação', () => {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it('Preencha os campos obrigatório e enviar o formulário', () => {
        cy.get('#firstName').should('be.visible').type('Leonardo').should('have.value', 'Leonardo')
        cy.get('#lastName').should('be.visible').type('Oliveira').should('have.value', 'Oliveira')
        cy.get('#email').should('be.visible').type('leo@email.com').should('have.value', 'leo@email.com')
        cy.get('#phone').should('be.visible').type('1139395454').should('have.value', '1139395454')
        cy.get('#email-checkbox').check().should('be.checked')
        cy.get('#open-text-area').should('be.visible').type(textLong, { delay: 0 }).should('have.value', textLong)
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
    })
    it('Exibir mensagem de erro ao submeter o formulário com formatação de email inválida', () => {
        cy.get('#firstName').should('be.visible').type('Leonardo').should('have.value', 'Leonardo')
        cy.get('#lastName').should('be.visible').type('Oliveira').should('have.value', 'Oliveira')
        cy.get('#email').should('be.visible').type('leoemail.com').should('have.value', 'leoemail.com')
        cy.get('#phone').should('be.visible').type('1139395454').should('have.value', '1139395454')
        cy.get('#email-checkbox').check().should('be.checked')
        cy.get('#open-text-area').should('be.visible').type('teste').should('have.value', 'teste')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })
    it('Após o preenchimento do input de numero telefônico, o mesmo deve permenecer vazio.', () => {
        cy.get('#phone').should('be.visible').type('leonardo').should('have.value', '')
    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.get('#firstName').should('be.visible').type('Leonardo').should('have.value', 'Leonardo')
        cy.get('#lastName').should('be.visible').type('Oliveira').should('have.value', 'Oliveira')
        cy.get('#email').should('be.visible').type('leo@email.com').should('have.value', 'leo@email.com')
        cy.get('#phone-checkbox').check().should('be.checked')
        cy.get('#open-text-area').should('be.visible').type('teste').should('have.value', 'teste')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })
    it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
        cy.get('#firstName').type('Leonardo').should('have.value', 'Leonardo').clear().should('have.value', '')
        cy.get('#lastName').type('Oliveira').should('have.value', 'Oliveira').clear().should('have.value', '')
        cy.get('#email').type('leoemail.com').should('have.value', 'leoemail.com').clear().should('have.value', '')
        cy.get('#phone').type('1139395454').should('have.value', '1139395454').clear().should('have.value', '')
    })
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })
    it('Enviar o formuário com sucesso usando um comando customizado', () => {
        cy.fillMandatoryFieldsAndSubmit(
            Cypress.env('nome'),
            Cypress.env('sobrenome'),
            Cypress.env('email'),
            Cypress.env('telefone')
        )
        cy.get('.success').should('be.visible')
    })
    it('Selecionar um produto (Youtube) por seu texto (Texto)', () => {
        cy.get('#product')
            .select('YouTube')
            .should('have.value', 'youtube')
    })
    it('Selecionar um produto (Mentoria) por seu valor (Value)', () => {
        cy.get('#product')
            .select('mentoria')
            .should('have.value', 'mentoria')
    })
    it('Selecionar um produto (Blog) por seu índice (1)', () => {
        cy.get('#product')
            .select(1)
            .should('have.value', 'blog')
    })
    it('Marcar tipo de atendimento "Feedback"', () => {
        cy.get('input[type="radio"][value="feedback"]')
            .check()
            .should('have.value', 'feedback')
    })
    it('Marcar cada tipo de atendimento', () => {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(($radio) => {
                cy.wrap($radio).check()    
                cy.wrap($radio).should('be.checked')      
            })

    })
    it('')
})