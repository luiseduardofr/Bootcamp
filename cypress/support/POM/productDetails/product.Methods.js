import { productElements } from "./product.Elements"

export class productMethods{


    static Validate (title, prices, descriptions){

        productElements.details.product.contains(title)
        productElements.details.price.contains(prices)
        productElements.details.description.contains(descriptions)
        productElements.details.addToCart.click()
        productElements.details.visitCart.click()

    }


}