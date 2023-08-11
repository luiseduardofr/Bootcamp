import { homeElements } from "./home.elements";

export class homeMethods{

    static clickOnProductCategories(productItem){

        homeElements.categories.productCat.each(($el,index,$list)=>{

            let producto = $el.text()
      
            if(producto.includes(productItem)){
      
              cy.wrap($el).click()
      
            }
      
      
          })

    }

   static clickOnProductList(productName){

        homeElements.product(productName).click()

    }


}