import { loginMethods } from "../support/POM/login/login.Methods"
import { menuMethods } from "../support/POM/menuPrincipal/menu.Methods"

describe('Suite de TC demoBlaze', () => {

  beforeEach(function(){

    cy.visit('/')

})
  
  before(function(){

    cy.fixture('datosTest').then(function(datos){

        globalThis.datos = datos

    })

})  

  it('Login', () => {
    
    menuMethods.clickMenuLogin()
    loginMethods.login(datos.usuario,datos.password)
    cy.wait(3000)


  })
})