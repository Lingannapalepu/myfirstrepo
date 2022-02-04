const domain = '6c318dd8.testarea.zextras.com';
const hostname = 'infra-'+domain;
const url = 'https://'+hostname+'/';
const username = 'test0';
const email = username+'@'+domain;
const password = 'assext0';

context('Actions', () => {
  before(() => {
    cy.visit(url);
    cy.get('#username').type(email);
    cy.get('#password').type(password+'{enter}');
  })

  beforeEach(() => {
    cy.visit(url);
    cy.wait(1500);
  })

  it('can print OTP label', () => {
    cy.contains('td','Zextras Auth').click();
    cy.wait(500);
    cy.contains('div','OTP Authentication').parent().click();
    cy.wait(500);
    cy.contains('div','NEW OTP').parent().click();

    cy.get('.Modal__ModalContainer-sc-18esghi-0').should('be.visible')
    .contains('input[name="OTP Label"]').type('testLabel');

    // cy.get('input[name="OTP Label"]').debug();
    // cy.contains('div','CREATE PASSWORD').click();
  })
})
