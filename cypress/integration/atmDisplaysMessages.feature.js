describe('ATM displays messages after successful transactions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays a welcome message', () => {
    cy.get('#message').should('contain', 'Greetings stranger. How may I be of service?')
  })

  it('displays a message upon withdrawal', () => {
    cy.get('.screen input').type(150)
    cy.get('#withdraw-button').click()
    cy.get('#message').should('contain', "Sure, take my money.. Here's 150kr.")
  })

  it('displays a message upon depositing', () => {
    cy.get('.screen input').type(350)
    cy.get('#deposit-button').click()
    cy.get('#message').should('contain', "Uh, what's that? 350kr? Why, thank you!")
  })
})