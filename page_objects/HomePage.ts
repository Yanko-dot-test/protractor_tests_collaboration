export default class HomePage {
    
    getHomePage(browser:any) {
        browser.waitForAngularEnabled(false)
        browser.get('https://workflowy.com/')
    }
}