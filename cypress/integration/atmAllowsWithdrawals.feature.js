describe('ATM can carry on withdrawals', () => {
  it('successfully withdraws amount from balance', () => {
    cy.visit('/')
    cy.get('.screen input').type('250')
    cy.get('#withdraw-button').click()
    cy.get('#balance').should('contain', 'Your balance: 750')
  });
});