export class signupElements{

    static get textBoxes(){

        return{

            get username(){

                return cy.get('input#sign-username')

            },
            
            get password(){

                return cy.get('input#sign-password')

            }


        }


    }

    static get buttonsSignUp(){

        return {

            get close(){

                return cy.contains('button', 'Close').eq(1)

            },

            get signUp(){

                return cy.contains('button', 'Sign up')

            }


        }

    }

}