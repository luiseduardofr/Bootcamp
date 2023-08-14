export class productElements {

    static get details(){

        return {

            get product(){

                return cy.get('.name')

            },

            get price(){

                return cy.get('.price-container')

            },

            get description(){

                return cy.get('p')

            },

            get addToCart(){

                return cy.contains('a', 'Add to cart')

            },

            get visitCart(){

                return cy.contains('a', 'Cart')

            }

        }

    }


}