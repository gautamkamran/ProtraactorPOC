let homepage = function(){


    let first_no = element(by.model('first'));
    let second_no = element(by.model('second'));
    let button_go = element(by.css('[ng-click="doAddition()"]'));
    let select = element(by.model('operator'));

this.getURL = function(URL){
    browser.get(URL);
};

this.enterFirstNumber = function(firstNoInput){
first_no.sendKeys(firstNoInput);
};

this.enterSecondNumber = function(secondNoInput){
    second_no.sendKeys(secondNoInput);
};

this.selectOperative = function(Option){
    select.$('[value="'+Option+'"]').click();
}

this.clickGO = function(){
    button_go.click();
};

this.VerifyResult = function(answer){
    let result = element(by.cssContainingText('.ng-binding', answer));
    expect(result.getText()).toEqual(answer);
};

};
module.exports = new homepage();