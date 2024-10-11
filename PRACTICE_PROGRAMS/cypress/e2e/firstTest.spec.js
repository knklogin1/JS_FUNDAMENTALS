describe('loginToAmazon', () => {
  it('firstTest', () => {
    cy.visit('/')
    cy.get('#nav-link-accountList').trigger('mouseover')              //invoke('show')
    
    cy.get('#nav-flyout-accountList .nav-action-signin-button').should('be.visible').click({force:true})
  })
})