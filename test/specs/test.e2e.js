const LoginPage = require('../Pages/Login.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        browser.url('https://www.saucedemo.com/v1/')
        await LoginPage.enterUsername()
        await LoginPage.enterPassword('secret_sauce')
        await LoginPage.clickLogin()
        browser.pause(2000)
        // ;(await $('id="user-name"')).setValue("standard_user")
        // ;(await $('id="password"')).setValue("secret_sauce ")
        // ;(await $("//button[text()='Open Menu']")).click
        
    })
})

