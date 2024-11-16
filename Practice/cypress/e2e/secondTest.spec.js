describe('loginToFlipkart', () => {
    it('secondTest', () => {
      
      cy.visit('https://www.flipkart.com')
      
      const searchTerm = 'laptop'
      cy.get('input[type="text"]').type(searchTerm + '{enter}')

      cy.wait(2000)

      cy.get('div.DOjaWF').each((val)=> {
        const productTab = val.text()
        cy.log(productTab)
      })



    })
  })






















  