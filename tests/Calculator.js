let homepage = require('../Pages/homepage');

describe('demo calculator', function(){

    it('addition test', function(){
        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('3');
        homepage.enterSecondNumber('2');
        homepage.selectOperative('ADDITION');
        homepage.clickGO();
        homepage.VerifyResult('5');

        browser.sleep(2000);
    
    
    });
    it('Subtraction test', function(){
        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('3');
        homepage.enterSecondNumber('2');
        homepage.selectOperative('SUBTRACTION');
        homepage.clickGO();
        homepage.VerifyResult('1');

        browser.sleep(2000);
    
    
    });

    it('DIVISION test', function(){
        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('6');
        homepage.enterSecondNumber('2');
        homepage.selectOperative('DIVISION');
        homepage.clickGO();
        homepage.VerifyResult('3');

        browser.sleep(2000);
    
    
    });
    it('MODULO test', function(){
        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('3');
        homepage.enterSecondNumber('2');
        homepage.selectOperative('MODULO');
        homepage.clickGO();
        homepage.VerifyResult('1');

        browser.sleep(2000);
    
    
    });

    it('MULTIPLICATION test', function(){
        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('3');
        homepage.enterSecondNumber('2');
        homepage.selectOperative('MULTIPLICATION');
        homepage.clickGO();
        homepage.VerifyResult('6');

        browser.sleep(2000);
    
    
    });
});