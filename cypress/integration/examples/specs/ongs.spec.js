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
    it('Usuário deve conseguir realizar o logout', () => {
        
        cy.login(); // Codigo no commands.js
        cy.get('button').click();
     });

     it('Usuário deve conseguir cadastrar novos casos', () => {
        
        cy.login();
        cy.get('.button').click();
        cy.get('[placeholder="Título do caso"]').type('Animais de Rua');
        cy.get('textarea').type('Vaquinha para ajudar animais de rua');
        cy.get('[placeholder="Valor em reais"]').type('5000');
        
        // Sempre antes de disparar requição precisa dizer qual rota quer monitar
        
        cy.route('POST', '**/incidents').as('newIncident');
        
        cy.get('.button').click();

        cy.wait('@newIncident').then((xhr) => {
            expect(xhr.status).to.eq(200); //Garantir que o stauts seja 200.
            expect(xhr.response.body).has.property('id'); // Garantir que o body vai ter Id
            expect(xhr.response.body.id).is.not.null; // Garantir que a resposta não seja nula 
        })

     });
     it('Usuarios devem conseguir excluir um caso', () => {
        cy.createNewIncident();
        cy.login(); 
        
        cy.route('DELETE','**/incidents/*').as('deleteIncident');

        cy.get('ul > :nth-child(1) > button > svg').click();

        cy.wait('@deleteIncident').then((xhr) => {
            expect(xhr.status).to.eq(204);
            expect(xhr.response.body).to.be.empty;
        })
     });
});

    