describe('ATM deposit', () => {
  it('is expected to add amount to balance', () => {
    cy.visit('/')
    cy.get('.screen input').type('250')
    cy.get('#deposit-button').click()
    cy.get('#balance').should('contain', 'Your balance: 1250')
  });
});