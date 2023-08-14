export class homeElements{

    static get categories (){

        return{

            get productCat(){

                return cy.get('.list-group-item')

            }

        }

    }

    static get productTable(){

        return cy.get('.hrefch')

    }

}