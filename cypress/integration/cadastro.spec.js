/// <reference types="cypress" />

describe('Magalu', () => {
        it('usuarios devem poder realizar um cadastro', () => {
            
            cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');
           
            /*Capturar Elementos
           .type para inserir um texto */
            cy.get('#email_create').type('qacompasso@compasso.com.br');
            cy.get('#SubmitCreate > span').click();
       
            // Formulario de Cadastro 
            cy.get('#id_gender1').type('Mr');//.should('');
            cy.get('#customer_firstname').type('João Victor');//.should(''); //.should asserção para confirmação da escrita
            cy.get('#customer_lastname').type('da Silva Santos');
            cy.get('#passwd').type('123456789');
            cy.get('[id=days]').select('8');
            cy.get('[id=months]').select('September');
            cy.get('[id=years]').select('1998');
            cy.get('#firstname').type('João Victor');
            cy.get('#lastname').type('da Silva Santos');
            cy.get('#company').type('Compasso UOL');
            cy.get('#address1').type('qacompasso@compasso.com.br');
            cy.get('#address2').type('qateste@compasso.com.br');
            cy.get('#city').type('Vitoria de Santo Antão');
            cy.get('#id_state').select('Texas');
            cy.get('#postcode').type('55614390');
            cy.get('#id_country').select('United States');
            cy.get('#other').type('Test Test Test Test Test Test');
            cy.get('#phone').type('8185585858');
            cy.get('#phone_mobile').type('35353535');
            cy.get('#alias').type('victor@compasso.com.br');

                
            // Então deverá conseguir realizar o login
            cy.get('#submitAccount').click();
        });
});