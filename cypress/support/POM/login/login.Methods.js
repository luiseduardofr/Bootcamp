import { loginElements } from "./login.Elements";

export class loginMethods{

    static insertUsername(username){

        loginElements.textBoxes.username.invoke('val',username)

    }

    static insertPassword(password){

        loginElements.textBoxes.password.invoke('val',password)

    }

    static clickLoginButton (){

        loginElements.buttons.login.click()

    }

    static login(user, password){

        this.insertUsername(user)
        this.insertPassword(password)
        this.clickLoginButton()

    }

}