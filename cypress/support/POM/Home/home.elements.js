export class homeElements{

    static get categories (){

        return{

            get productCat(){

                return cy.get('.list-group-item')

            }

        }


    }

    static product(productName){

        return cy.contains('a',productName)

    }

}