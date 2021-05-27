/// <reference types="cypress" />

describe('Magalu', () => {
//     it('usuarios devem poder realizar um cadastro', () => {
        
//         cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');
       
//         /*Capturar Elementos
//        .type para inserir um texto */
//         cy.get('#email_create').type('qacompasso@compasso.com.br');
// });
    it('Usuarios deve poder realizar um login no sistema', () => {
        // Dado que esteja na tela de login
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');        ;
        
        // Quando informar o login e senha 
        cy.get('#email').type('qacompasso@compasso.com.br')
        .should('have.value', 'qacompasso@compasso.com.br');
        
        cy.get('#passwd').type('123456789')
        .should('have.value', '123456789'); //.should asserção para confirmação da escrita

        // Então deverá conseguir realizar o login
        cy.get('#SubmitLogin').click();
    });
});

