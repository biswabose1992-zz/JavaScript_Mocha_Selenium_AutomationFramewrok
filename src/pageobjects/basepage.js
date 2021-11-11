const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
const driver = new Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});

class BasePage{
    constructor(){
        global.driver = driver;
    }

    async go_to_url(theURL){
        await  driver.get(theURL);
        await driver.manage().window().maximize();
    }


    async enterTextByID(id,data){
        
        await driver.findElement(By.id(id)).isDisplayed();
        await driver.findElement(By.id(id)).sendKeys(data);

    }    

    async clickById(id){
        await driver.findElement(By.id(id)).isDisplayed();
        await driver.findElement(By.id(id)).click();
    }

    async  clickByXPath(XPath){
        await driver.findElement(By.xpath(XPath)).isDisplayed();
        await driver.findElement(By.xpath(XPath)).click();
    }

    async verifytext(XPath){
        await driver.findElement(By.xpath(XPath)).isDisplayed();
        return await driver.findElement(By.xpath(XPath)).getText();
    }

    async closebrowser(){
        await driver.quit();
    }
}

module.exports = BasePage;