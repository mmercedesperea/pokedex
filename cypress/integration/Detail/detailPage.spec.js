describe('Detail Page', () => {
  before(function () {
    cy.visit('http://localhost:3000/');
    cy.get('.pokemonNameLi').contains('BULBASAUR').click();
  });

  it('should load header', () => {
    cy.get('.header').contains('POKÉDEX').should('exist');
  });

  it('should show image', () => {
    cy.get('.pokemonImg ').should('exist');
  });

  it('should show name', () => {
    cy.get('.infoPokemon').contains('BULBASAUR').should('exist');
  });

  it('should go back', () => {
    cy.get('.buttonP').should('exist');
    cy.get('.buttonP').click();
    cy.get('.buttonP').should('not.exist');
  });
});
