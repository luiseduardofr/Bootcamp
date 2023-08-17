export class cartElements {

static get buttons(){

    return{


        get orderNow(){

            return cy.get('button[data-toggle="modal"]')

        }

    }   

}

static get Links(){

    return {

        deleteProduct(productName){

            return cy.contains('td', productName).closest("tr").find("a")

        }


    }

}


}