import { loginMethods } from "../support/POM/login/login.Methods"
import { menuMethods } from "../support/POM/menuPrincipal/menu.Methods"
import { signUpMethods } from "../support/POM/signUp/signUp.Methods"

describe('Suite de TC demoBlaze', () => {

  beforeEach(function(){

    cy.visit('/')

})
  
  before(function(){

    cy.fixture('datosTest').then(function(datos){

        globalThis.datos = datos

    })

})  

it('Sign Up',()=>{

  menuMethods.clickMenuSignUp()
  signUpMethods.signUpFull(datos.login.usuario,datos.login.password)


})  

it('Login', () => {
    
    menuMethods.clickMenuLogin()
    loginMethods.login(datos.login.usuario,datos.login.password)
    cy.wait(1000)


  })
})