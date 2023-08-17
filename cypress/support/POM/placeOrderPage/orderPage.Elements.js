export class orderPageElements {

    static get buttons(){


        return{


            get closeForm(){

                return cy.get('div[id="orderModal"] button').eq(1)
    
            },
    
            get purchase(){
    
                return cy.contains('button', 'Purchase')
    
            }


        }


    }

    static get Form(){

        return{
    
            get nameForm(){
    
                return cy.get('input#name')
    
    
            },

            get countryForm(){
    
                return cy.get('input#country')
    
    
            },

            get cityForm(){
    
                return cy.get('input#city')
    
    
            },

            get creditCardForm(){
    
                return cy.get('input#card')
    
    
            },

            get monthForm(){
    
                return cy.get('input#month')
    
    
            },

            get yearForm(){
    
                return cy.get('input#year')
    
    
            }
    
    
        }
    
    
    }

}