// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("create0ng", () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3333/ongs',
        body: { 
                city: "Vitória de Santo Antão",
                email: "vitinn_santos@hotmail.com",
                name: "testtestestes",
                uf: "PE",
                whatsapp: "815885858"

        }
    }).then(response => {
        expect(response.body.id).is.not.null;
        cy.log(response.body.id);

        Cypress.env('created0ngID', response.body.id); // Criar um ambiente temporario de testes

    });
})

Cypress.Commands.add('createNewIncident', () => {
    Cypress.env('created0ngid')
    cy.request ({
        method: 'POST',
        url: 'http://localhost:3333/incidents',
        headers: { 'Authorization' : `${ Cypress.env('created0ngID') }`, },
        body: {
            title: "Animais de Famintosqweqweqweqw",
            description: "qa teste automatizados compasso uol",
            value: "5000"
        }
    
    // Verificar o request 
    }).then(response => {
        expect(response.body.id).is.not.null;
        cy.log(response.body.id);

        // Salvar em uma variavel de ambiente
        Cypress.env('createdIncidentId', response.body.id); 
    });
})

Cypress.Commands.add('login', () => {
    cy.visit('http://localhost:3000/profile', {
                
        // onBeforeLoad = Função para indicar que Antes da página carregar fazer alguma ação
        onBeforeLoad:(browser) => { 
        browser.localStorage.setItem('ongId', Cypress.env('created0ngID'))
        browser.localStorage.setItem('ongName','testtestestes'); 
    }
});
})