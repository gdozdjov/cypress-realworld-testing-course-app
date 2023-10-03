describe('Home Page', () => {
beforeEach(() => {
  cy.visit('http://localhost:3000')
});

  it('Test 1: Check h1 header', () => {
    cy.get('[data-test="hero-heading"]').contains('Testing Next.js Applications with Cypress')
  })

  it('Test 2: Checking values in an array', () => {
    cy.get('dt').eq(0).contains('4 Courses')
    cy.get('dt').eq(1).contains('25+ Lessons')
    cy.get('dt').eq(-1).contains('Free and Open Source')
  })

})