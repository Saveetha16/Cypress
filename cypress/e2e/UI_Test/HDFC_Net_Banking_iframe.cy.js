 // type definitions for Cypress object "cy"
/// <reference types="cypress" />
/// <reference types="Cypress-iframe" />
//import 'cypress-iframe'

describe('To Handle iFrame', function () {
  it('Visits the HDFC Net Banking Page and Perform Action', function () {
      //Visit the HDFC Netbanking Website
      cy.visit("https://netbanking.hdfcbank.com/netbanking/");

      // Enter to Frame and then perform action on element

      cy.get("frame[name='login_page']").then(function ($iframe) {
          const iframeele = $iframe.contents().find('input[name="fldLoginUserId"]')
          cy.wrap(iframeele).type('1000')
          const iframebutton = $iframe.contents().find(".btn.btn-primary.login-btn")
          cy.wrap(iframebutton).click()
      })

  })
})


  
  