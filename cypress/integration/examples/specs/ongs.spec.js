/// <reference types="cypress" />

describe('Ongs', () => {
    
    //.skip = pausar o teste
    it('Usuário devem conseguir fazer cadastro', () => {
        //cy.visit = Visitar a requisição 
        cy.visit('http://localhost:3000/register');
        /* cy.get = Capturar um ou mais Elementos
        .type = insere um texto */
        cy.get('[data-cy=name]').type('Compasso QA Test')
        .should('have.value', 'Compasso QA Test');
        
        cy.get('[data-cy=email]').type('qacompasso@compasso.com.br')
        .should('have.value', 'qacompasso@compasso.com.br');
        
        cy.get('[data-cy=whatsapp]').type('81995591069')
        .should('have.value', '81995591069');
        
        cy.get('[data-cy=city]').type('Vitoria de Santo Antão')
        .should('have.value', 'Vitoria de Santo Antão');
        
        cy.get('[data-cy=uf]').type('PE')
        .should('have.value', 'PE');

        // routing - Escutar onde as aplicações esta se conectando
        // cy.server() - para start server
        // criar uma rota com cy.route()
        // atribuir rota a um alias
        // esperar com cy.wait e executar uma validação

        // cy.server(); // Importante passar cy.server antes da chamada http
        cy.route('POST', '**/ongs').as('post0ng'); // as('') - salva a rota para ser chamada futuramente

        cy.get('[data-cy=submit]').click();

        cy.wait('@post0ng').then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;


        })
        
    });
      it('Usuário deve conseguir realizar um login', () => {
       
        // const create0ngID = Cypress.env('created0ngID');
        //     cy.log(create0ngID);

            cy.visit('http://localhost:3000/');
            cy.get('input').type(Cypress.env('created0ngID'));
            cy.get('.button').click();
});
});