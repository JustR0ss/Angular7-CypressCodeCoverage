/// <reference types="cypress" />

context('coverage test 2',function() {
    specify('check if screen has text', function (){
        cy.visit('index.html');
        cy.get('button').click();
        cy.contains('secondpage works');
    });
});