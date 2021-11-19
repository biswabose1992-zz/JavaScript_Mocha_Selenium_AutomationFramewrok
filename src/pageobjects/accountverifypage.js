const { assert } = require('chai');
const {By,Key} = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const constants = require('../utilities/constants');
var BasePage = require ('./basepage');

class accountverifypage extends BasePage{

    accountverify = '//h1[text()="Check your email"]';
    entercode_textfield = 'code';


    async verifycheckyouremailpage(){
       
        await this.verifytext(this.accountverify,constants.Succesfulsignupmessage)
   }

}
module.exports = new accountverifypage();