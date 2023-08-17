import { thankYouElements } from "./thanksYouElements";

export class thankYouMethods {

    static validPurchase(msj){

        thankYouElements.msjThankYou.thankYouPurchase.contains(msj)


    }

    static okPurchase(){


        thankYouElements.buttons.okButton.click()

    }


}