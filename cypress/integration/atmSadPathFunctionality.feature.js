describe('ATM has sad path functionality', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('does not withdraw if amount is higher than balance', () => {
    cy.get('.screen input').type(5000)
    cy.get('#withdraw-button').click()
    cy.get('#balance').should('contain', 'Your balance: 1000;-')
  })

  it('displays an error message if amount is higher than balance', () => {
    cy.get('.screen input').type(5000)
    cy.get('#withdraw-button').click()
    cy.get('#message').should('contain', "Ha! You don't have enough money! You're 4000kr short.")
  })


  it('displays an error message if amount is 0', () => {
    cy.get('.screen input').type(0)
    cy.get('#withdraw-button').click()
    cy.get('#message').should('contain', "Come on, quit playing around!")
  })

  it('displays an error message if amount is empty', () => {
    cy.get('#deposit-button').click()
    cy.get('#message').should('contain', "Come on, quit playing around!")
  })
})