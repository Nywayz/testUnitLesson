describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('1').click()
      cy.contains('0').click()
      cy.contains('/').click()
      cy.contains('2').click()
      cy.contains('=').click()
      cy.get(".result").contains("5")
    })
  })