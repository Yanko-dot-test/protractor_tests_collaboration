import { browser, element, $ } from 'protractor'

import HomePage from "../page_objects/HomePage"
import Login from "../page_objects/Login"
import Item from "../page_objects/Item"

describe('collaboration test on workflowy', function() {

    var homePage = new HomePage()
    var login = new Login()
    var item = new Item()

    var browser2 = browser.forkNewDriverInstance()
    var element2 = browser2.element
    var $2 = browser2.$

    it('should open 2 browser windows and check calloboration', function() {
        homePage.getHomePage(browser)
        homePage.getHomePage(browser2)
     
        login.login(browser, $, element)
        login.login(browser2, $2, element2)

        item.addItem(browser, $)

        browser2.sleep(12000)
        item.expectNewItem($2)
    })
})