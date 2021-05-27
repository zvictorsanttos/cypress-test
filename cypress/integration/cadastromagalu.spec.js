/// <reference types="cypress" />

describe('Magalu', () => {
        it('usuarios devem poder realizar um cadastro', () => {
          //Dado que esteja na pagina de login
          cy.visit('https://sacola.magazineluiza.com.br/#/cliente/login');
            
          /*Capturar Elementos
           .type para inserir um texto */
          
           // Quando informar e-mail e senha 
          cy.get('#login').type('qacompasso@compasso.com.br');
          
          // Então deverá conseguir fazer o login
          cy.get('.LoginBox-form-continue').click();
    })
});