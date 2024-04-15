
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="Basic React JS Quiz"]').should("exist")
    .should('have.text','Basic React JS Quiz')
    ;
  })
})