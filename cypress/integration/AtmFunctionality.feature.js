describe('ATM functionality', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  describe('happy path', () => {
    it('withdraws money correctly', () => {
      cy.get('[data-cy="balance"]').should('contain', 'Your account balance: 1000')
      cy.get('[data-cy="amount-input"]').type(100)
      cy.get('[data-cy="withdraw-button"]').click()
      cy.get('[data-cy="balance"]').should('contain', 'Your account balance: 900')
    })

    it('deposits money correctly', () => {
      cy.get('[data-cy="amount-input"]').type(100)
      cy.get('[data-cy="deposit-button"]').click()
      cy.get('[data-cy="balance"]').should('contain', 'Your account balance: 1100')
      cy.get('[data-cy="message"]').should('contain', "Why, thank you for the 100 kr!")
    })

    it('displays a success message upon withdrawal', () => {
      cy.get('[data-cy="amount-input"]').type(100)
      cy.get('[data-cy="withdraw-button"]').click()
      cy.get('[data-cy="message"]').should('contain', "Oh sure, take my money. Here's 100 kr")
    })

    it('displays a success message upon depositing', () => {
      cy.get('[data-cy="amount-input"]').type(100)
      cy.get('[data-cy="deposit-button"]').click()
      cy.get('[data-cy="message"]').should('contain', "Why, thank you for the 100 kr!")
    })
  })

  describe('sat paths', () => {
    it('does not withdraw if amount is higher than balance', () => {
      cy.get('[data-cy="amount-input"]').type(1100)
      cy.get('[data-cy="withdraw-button"]').click()
      cy.get('[data-cy="balance"]').should('contain', 'Your account balance: 1000')
      cy.get('[data-cy="message"]').should('contain', "You don't have enough money to withdraw that much! Ha!")
    })

    it('makes no transaction when amount is 0', () => {
      cy.get('[data-cy="amount-input"]').type(0)
      cy.get('[data-cy="withdraw-button"]').click()
      cy.get('[data-cy="balance"]').should('contain', 'Your account balance: 1000')
      cy.get('[data-cy="message"]').should('contain', 'Come on, stop playing around.')
    })

    it('makes no transaction when amount is empty', () => {
      cy.get('[data-cy="amount-input"]').type(0)
      cy.get('[data-cy="deposit-button"]').click()
      cy.get('[data-cy="balance"]').should('contain', 'Your account balance: 1000')
      cy.get('[data-cy="message"]').should('contain', 'Come on, stop playing around.')
    })
  })
})