describe('Vue app demo', function() {
  
    before(browser => browser.url('http://vuepocbucket.s3-website.ap-south-1.amazonaws.com/'));
  
    test('Vue app demo with selenium', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.titleContains('vuepocproject')
        .assert.visible('#userName')
        .setValue('#userName', 'admin')
        .assert.visible('#password')
        .setValue('#password', 'admin')
        .click('button[type=button]')
        .assert.visible('#message')
        .assert.containsText('#message', 'Login Successful')           
        
    });
    // after(browser => browser.end());
  });
  