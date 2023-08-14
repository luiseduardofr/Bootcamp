import { homeMethods } from "../support/POM/Home/home.methods"
import { loginMethods } from "../support/POM/login/login.Methods"
import { menuMethods } from "../support/POM/menuPrincipal/menu.Methods"
import { productMethods } from "../support/POM/productDetails/product.Methods"
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
    loginMethods.login(datos.login.usuario, datos.login.password)

  })


  it('Home', () => {
    
    //homeMethods.clickOnProductCategories(datos.products.monitors)
    //homeMethods.clickOnProductCategories(datos.products.phones)

    homeMethods.clickOnProductCategories(datos.products.laptops)
    homeMethods.clickOnProductList(datos.models.macbook_air.name)

  })

  it('product-Detalis', () => {
    
    homeMethods.clickOnProductCategories(datos.products.laptops)
    homeMethods.clickOnProductList(datos.models.macbook_air.name)
    productMethods.Validate(datos.models.macbook_air.name, datos.models.macbook_air.price, datos.models.macbook_air.description)


  })



})

