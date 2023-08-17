import { cartElements } from "./cart.elements";

export class cartMethods {


    static placeOrder (){

        cartElements.buttons.orderNow.click()

    }

    static selectItemToDelete(productName){

        cartElements.Links.deleteProduct(productName).click()

    }


}