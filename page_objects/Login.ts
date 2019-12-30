import { ExpectedConditions, by } from 'protractor'

export default class Login {

    private loginButton1:string = '._1tjtxrr'
    private loginButton2:string = '._iu6sog'

    login(browser:any, cssMethod:any, element:any) {
        cssMethod(this.loginButton1).click()
        element(by.name('email')).sendKeys('test+111@workflowy.com')
        cssMethod(this.loginButton2).click()

        let codeInput = element(by.name('code'))
        let EC = ExpectedConditions
        let condition = EC.visibilityOf(codeInput)
        browser.wait(condition, 6000)
        codeInput.sendKeys('111111')
        cssMethod(this.loginButton2).click()
    }
}