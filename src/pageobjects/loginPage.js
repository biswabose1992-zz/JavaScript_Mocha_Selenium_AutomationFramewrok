const { assert } = require('chai');
const {Key} = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const constants = require('../utilities/constants');
var BasePage = require ('./basepage');

class loginPage extends BasePage{

    user_field = 'name';
    email_field = 'email';
    pwd_field = 'password';
    terms_checkbox= '//input[@id="signup-terms"]/../span/label';
    newsupdates_checkbox = '//input[@id="signup-subscribe"]/../span/label';
    getstarted_button = '//button[@type="submit"]';
    incorrect_emailid = '//div[@class="signup__error"]/label[text()="The email you entered is incorrect."]';
    incorrect_registered_emailmessage= '//div[@class="signup__error"]/label[text()="Sorry, this email is already registered"]';
    


    async enter_user_data(userid, email, password){
       
       
        //This will enter text into the user field
        await this.enterTextByID(this.user_field, userid);

        //This will enter text into the email field 
        await this.enterTextByID(this.email_field, email);


        //This will enter text into the password field
        await this.enterTextByID(this.pwd_field, password);

        //this will click on element
        await this.clickByXPath(this.terms_checkbox);
        await this.clickByXPath(this.newsupdates_checkbox);
        await this.clickByXPath(this.getstarted_button);
        await driver.sleep(10000)
   }


    async validate_incorrect_emailcredentials(){

        await this.verifytext(this.incorrect_emailid,constants.invalidemailmessage1)
        
   }

   async validate_existingregistered_credentials(){

    await this.verifytext(this.incorrect_registered_emailmessage,constants.invalidemailmessage2)

}
}
module.exports = new loginPage();