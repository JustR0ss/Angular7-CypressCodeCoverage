// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

const istanbul = require('istanbul-lib-coverage');

const map = istanbul.createCoverageMap({});

Cypress.on('uncaught:exception', (err, runnable) => {
  cy.log(err)
  // returning false here prevents Cypress from
  // failing the test
  return false
});
afterEach(function() {
  if (this.currentTest.state === 'failed') {
    Cypress.runner.stop()
  }
});

Cypress.on('window:before:unload', e => {
  const coverage = e.currentTarget.__coverage__;
  if (coverage) {
    map.merge(coverage);
  }
});

after(() => {
  cy.window().then(win => {
    const coverage = win.__coverage__;

    if (coverage) {
      map.merge(coverage);
    }

    let testName = Cypress.spec.name;
    let indexSlash = testName.lastIndexOf('\\');
    let indexSpec = testName.lastIndexOf('.spec');
    let newTestName1 = testName.substring(indexSlash+1);
    let newTestName2 = newTestName1.substring(0, indexSpec);
    cy.writeFile('.nyc_output/' + newTestName2 + '.json', JSON.stringify(map));
    cy.exec('node createCoverageReport.js');

  });
});
