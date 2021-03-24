describe('ATM can carry out transactions', () => {

  it('successfully withdraws amount from balance', () => {
    cy.visit('/')
    cy.get('.screen input').type(250)
    cy.get('#withdraw-button').click()
    cy.get('#balance').should('contain', 'Your balance: 750;-')
  })

  it('successfully deposits amount to balance', () => {
    cy.visit('/')
    cy.get('.screen input').type(250)
    cy.get('#deposit-button').click()
    cy.get('#balance').should('contain', 'Your balance: 1250;-')
  })
})