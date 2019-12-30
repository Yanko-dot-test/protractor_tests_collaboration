import { ExpectedConditions } from 'protractor'

export default class Item {

    private bulletInputClass:string = '._4q4shy'
    private bulletInputText:string = 'something'
    private addChildButtonClass:string = '.addChildButton'
    private starButton:string = '.starButton'

    addItem(browser:any, cssMethod:any) { 
        let bulletInput = cssMethod(this.bulletInputClass)
        let addChildButton = cssMethod(this.addChildButtonClass)

        let EC = ExpectedConditions
        let condition1 = EC.visibilityOf(addChildButton)
        let condition2 = EC.visibilityOf(bulletInput)

        browser.wait(condition1, 2000)
        addChildButton.click() 
        .then(() => 
        browser.wait(condition2, 3000),
        bulletInput.sendKeys(this.bulletInputText))
    }

    expectNewItem(cssMethod:any) {
        let bulletInput = cssMethod(this.bulletInputClass)

        expect<any>(bulletInput.getText()).toEqual(this.bulletInputText)
    }

    starNode(cssMethod:any) {
        cssMethod(this.starButton).click()
    }
}