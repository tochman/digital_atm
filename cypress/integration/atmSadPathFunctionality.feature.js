describe('ATM sad fath functionality', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  describe('is expected to reject withdraw attempt if amount is greater than balance', () => {
    beforeEach(() => {
      cy.get('.screen input').type('5000')
      cy.get('#withdraw-button').click()
  
    });
    it('by NOT performing the withdrawal', () => {
      cy.get('#balance').should('contain', 'Your balance: 1000')

    });

    it('by displaying error message', () => {
      cy.get('#message').should('contain', 'Ha! You don\'t have enough money! You\'re 4000kr short.')
    });
  });



  describe('is expected to reject withdraw attempt if amount is 0', () => {
    beforeEach(() => {
      cy.get('.screen input').type('0')
      cy.get('#withdraw-button').click()
  
    });
    it('by NOT performing the withdrawal', () => {
      cy.get('#balance').should('contain', 'Your balance: 1000')

    });

    it('by displaying error message', () => {
      cy.get('#message').should('contain', 'Come on! Quit playing around!')
    });
  });

  describe('is expected to reject withdraw attempt if amount is empty', () => {
    beforeEach(() => {
      cy.get('#withdraw-button').click()
  
    });
    it('by NOT performing the withdrawal', () => {
      cy.get('#balance').should('contain', 'Your balance: 1000')

    });

    it('by displaying error message', () => {
      cy.get('#message').should('contain', 'Come on! Quit playing around!')
    });
  });

  describe('is expected to reject a deposit attempt if amount is 0', () => {
    beforeEach(() => {
      cy.get('.screen input').type('0')
      cy.get('#deposit-button').click()
  
    });
    it('by NOT performing the withdrawal', () => {
      cy.get('#balance').should('contain', 'Your balance: 1000')

    });

    it('by displaying error message', () => {
      cy.get('#message').should('contain', 'Come on! Quit playing around!')
    });
  });

});