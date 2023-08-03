export class loginElements {

    static get textBoxes(){

        return{

            get username(){

                return cy.get('input#loginusername')

            },

            get password(){

                return cy.get('input#loginpassword')

            }

        }

    }

    static get buttons(){

        return{

            get close(){

                return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')

            },

            get login(){

                return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')

            }

        }

    }

    static get valid(){

        return{

            get Login(){

                return cy.get('a#nameofuser')

            }

        }

    }

}