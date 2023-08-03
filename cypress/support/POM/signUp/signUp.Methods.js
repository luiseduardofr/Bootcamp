import { signupElements } from "./signUp.Elements";

export class signUpMethods{

    static insertUsername(username){

        signupElements.textBoxes.username.invoke('val',username)

    }

    static insertPassword(password){

        signupElements.textBoxes.password.invoke('val',password)

    }

    static clickSignUp(){

        signupElements.buttonsSignUp.signUp.click()

    }


    static signUpFull(user, password){

        this.insertUsername(user)

        this.insertPassword(password)

        this.clickSignUp()

    }


}