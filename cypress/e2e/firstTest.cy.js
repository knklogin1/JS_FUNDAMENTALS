
// load the site "https://demoqa.com/progress-bar" and check the progress bar


describe('First_Test_Suite', () => {


    it('check_Progress_Bar',() => {
        cy.visit("https://www.demoqa.com/progress-bar")
        cy.url().should('contains','/progress-bar')
        cy.get('#startStopButton').click()
        cy.wait(3000)
        cy.get('.progress').invoke('css','width').then((width)=>{
            const progressPercentage = parseFloat(width)
            expect(progressPercentage).to.be.within(1,100)

            for(let k of progressPercentage) {
                if(k==75) {
                    cy.get('#progressBarContainer').find('Start').click()
                }
            }
        })


    })

    
        it('Starts progress bar and stops at 50%', () => {
          // Visit your page (adjust the URL to your own)
          cy.visit('http://yourwebsite.com');
      
          // Start the progress bar (this might be triggered by a button, for example)
          cy.get('#start-button').click();  // Replace with your actual element that starts the progress bar
      
          // Monitor the progress bar while it's running
          cy.get('#progress-bar').should('exist');
      
          // Check progress at intervals until it reaches 50%
          cy.get('#progress-bar').should((progressBar) => {
            let progress = parseInt(progressBar.attr('aria-valuenow')) || 0;  // Assuming 'aria-valuenow' is used to track progress
            expect(progress).to.be.lessThan(50);
          });
      
          // Wait for the progress bar to reach 50%
          cy.wait(500);  // Adjust the time if needed for the progress bar to move
      
          // Check that the progress bar has reached 50%
          cy.get('#progress-bar').should((progressBar) => {
            let progress = parseInt(progressBar.attr('aria-valuenow')) || 0;
            expect(progress).to.equal(50);
          });
      
          // Now stop the progress bar (this could be by clicking a stop button or using any specific method)
          cy.get('#stop-button').click();  // Replace with the actual stop button or stop event trigger
        });
});
      


























