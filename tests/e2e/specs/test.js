// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

// module.exports = {
//   'default e2e tests': browser => {
//     browser
//       .init()
//       .waitForElementVisible('#app')
//       .assert.elementPresent('.hello')
//       .assert.containsText('h1', 'Welcome to Your Vue.js App')
//       .assert.elementCount('img', 1)
//       .end()
//   },

//   'example e2e test using a custom command': browser => {
//     browser
//       .openHomepage()
//       .assert.elementPresent('.hello')
//       .end()
//   }
// }
module.exports = {
  'step one: navigate to ecosia.org': function (browser) {
    browser
      .url('https://www.ecosia.org')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]');
  },

  'step two: click submit' : function (browser) {
    browser
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  }
};
