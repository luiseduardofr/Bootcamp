import { loginElements } from "./login.Elements";

export class loginMethods{

    static insertUsername(username){

        loginElements.textBoxes.username.type(username)

    }

    static insertPassword(password){

        loginElements.textBoxes.password.type(password)

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