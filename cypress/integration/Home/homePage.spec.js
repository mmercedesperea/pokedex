describe('Home Page', () => {
  before(function () {
    cy.visit('http://localhost:3000/');
  });

  it('should load header', () => {
    cy.get('.header').contains('POKÉDEX').should('exist');
  });

  it('should load 10 pokeballs', () => {
    cy.get('.pokeballListImg').should('have.length', 10);
  });

  it('should navigate to next page', () => {
    cy.get('.pokemonNameLi').contains('BULBASAUR').should('exist');
    cy.get('.pokemonNameLi').contains('METAPOD').should('not.exist');

    cy.get('.next').click();

    cy.get('.pokemonNameLi').contains('BULBASAUR').should('not.exist');
    cy.get('.pokemonNameLi').contains('METAPOD').should('exist');
  });

  it('should navigate to prev page', () => {
    cy.get('.pokemonNameLi').contains('BULBASAUR').should('not.exist');
    cy.get('.pokemonNameLi').contains('METAPOD').should('exist');

    cy.get('.prev').click();

    cy.get('.pokemonNameLi').contains('BULBASAUR').should('exist');
    cy.get('.pokemonNameLi').contains('METAPOD').should('not.exist');
  });
});
