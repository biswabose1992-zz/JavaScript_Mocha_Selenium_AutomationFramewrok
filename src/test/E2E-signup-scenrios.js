const accountverifypageobjects = require('../pageobjects/accountverifypage');
const { accountverify } = require('../pageobjects/accountverifypage');
const loginPage = require('../pageobjects/loginPage');
const accountverifypage = require('../pageobjects/accountverifypage');
const constants= require('../utilities/constants')


describe('E2E signup scenrios', async function(){

    beforeEach(async function(){
        //Actions performed before test:Launch URL
        await loginPage.go_to_url(constants.baseurl);
       
    });

    it('Create new miro account - Successful signup', async function(){
        //Enter test steps  
        await   loginPage.enter_user_data(constants.newuser,constants.newemail,constants.newpwd);
        await   accountverifypage.verifycheckyouremailpage();
    })

    it('Create new miro account with Invalid credentials - wrong email id', async function(){
        //Enter test steps
        await loginPage.enter_user_data(constants.newuser, constants.invalidemailid,constants.newpwd);
        await loginPage.validate_incorrect_emailcredentials()
    })

    it('Create new miro account with existing user credentials', async function(){
        //Enter test steps
        await loginPage.enter_user_data(constants.existinguser, constants.existingemailid,constants.existingpassword);
        await loginPage.validate_existingregistered_credentials();

    })

   after(async function() {
        //Enter actions performed after all tests:close browser
        await loginPage.closebrowser();
}
   );
})


