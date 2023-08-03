export class menuElements{

    static get menuPrincipal(){

        return{

            get Login(){

                return cy.get('#login2')

            },

            get SignUp(){

                return cy.get('a[data-target="#signInModal"]')

            },

            get Cart(){

                return cy.get('a#cartur')

            },

            get AboutUs(){

                return cy.get('a[data-target="#videoModal"]')

            },

            get Contact(){

                return cy.get('a[data-target="#exampleModal"]')

            },

            get Home(){

                return cy.get('li.active a')

            }
            
        }

    }

}