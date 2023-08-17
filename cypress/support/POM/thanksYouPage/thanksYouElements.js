export class thankYouElements {

static get buttons(){

    return{

        get okButton(){

            return cy.get('.confirm')

        }


    }


}


static get msjThankYou(){

    return{

        get thankYouPurchase(){

            return cy.get('.sweet-alert > h2')

        }


    }
}



}