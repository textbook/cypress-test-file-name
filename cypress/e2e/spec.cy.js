const filename = 'example.json'

describe('page', () => {
  it('works once', () => {
    cy.visit('/')
    cy.fixture(filename).as('file')
    cy.get('input[type="file"]').selectFile('@file')
    cy.get('#filename').should('contain.text', filename)
  })

  it('fails the second time', () => {
    cy.visit('/')
    cy.fixture(filename).as('file')
    cy.get('input[type="file"]').selectFile('@file')
    cy.get('#filename').should('contain.text', filename)
  })
})
