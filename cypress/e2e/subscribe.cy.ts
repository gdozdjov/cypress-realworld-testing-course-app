describe('Subscription Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    context('E-mail Validation', () => {
        it('Test 1: Valid email for subscription', () => {
            cy.getByData('email-input').type('tom@aol.com')
            cy.getByData('submit-button').click()
            cy.getByData('success-message').should('exist').contains('tom@aol.com')
        });

        it('Test 2: Invalid e-mail for subscription', () => {
            cy.getByData('email-input').type('tom')
            cy.getByData('submit-button').click()
            cy.getByData('success-message').should('not.exist')
        });

        it('Test 3: Duplicate e-mail subscription', () => {
            cy.getByData('email-input').type('john@example.com')
            cy.getByData('submit-button').click()
            cy.getByData('success-message').should('not.exist')
            cy.getByData('server-error-message')
                .should('exist')
                .contains('Error: john@example.com already exists. Please use a different email address.')
        });
    });

    context('Course Section', () => {
        it('Page 1', () => {
            cy.getByData('course-0').find('a').eq(3).click()
            cy.location('pathname').should('eq', '/testing-your-first-application')
        });
        it.only('Page 2', () => {
            cy.get('.mt-24').find('a').eq(0).click()
            
        });
    });

});