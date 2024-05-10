class LoginPage{

    get usernameTextbox(){
        return $('#user-name')
    }
    get passwordTextbox(){
        return $('#password')
    }
    get login(){
        return $("//button[text()='Open Menu']")
    }

    async enterUsername(){
        (await this.usernameTextbox).setValue('standard_user')
    }
   async enterPassword(password){
        await this.passwordTextbox.setValue(password)

    }
    async clickLogin(){
        await this.login.click()
    }
}
module.exports=new LoginPage()