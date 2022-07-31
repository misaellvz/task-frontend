describe('Login', () => {
  it('Auth', () => {
    const baseUrl = Cypress.env('base_url');
    const username = Cypress.env('username');
    const password = Cypress.env('password');

    expect(baseUrl).to.equal('http://localhost:3000');

    cy.visit(baseUrl);

    cy.url().then((url) => {
      if (url.includes('auth0.com')) {
        cy.get('#username')
          .type(username)
          .should('have.value', username);

        cy.get('#password')
          .type(password)
          .should('have.value', password);

        cy.contains('Continue').click();

        cy.visit(baseUrl);
      } else {
        const taskDescription = 'Cypress task added correctly';
        cy.get('#description')
          .type(taskDescription)
          .should('have.value', taskDescription);

        cy.getBySel('task-add-button').click();
      }
    });
  });
});

export {};
