import { orderPageElements } from "./orderPage.Elements";

export class orderPageMethods {

    static insertName (name){

        orderPageElements.Form.nameForm.invoke('val',name)

    }

    static insertCountry (country){

        orderPageElements.Form.countryForm.invoke('val',country)

    }

    static insertCity(city){

        orderPageElements.Form.cityForm.invoke('val',city)

    }

    static insertCard(card){

        orderPageElements.Form.creditCardForm.invoke('val',card)

    }

    static insertMonth(month){

        orderPageElements.Form.monthForm.invoke('val',month)

    }

    static insertYear(year){

        orderPageElements.Form.yearForm.invoke('val',year)

    }

     static completePurchase(name, country, city, card, month, year){

        this.insertName(name)
        this.insertCountry(country)
        this.insertCity(city)
        this.insertCard(card)
        this.insertMonth(month)
        this.insertYear(year)

        orderPageElements.buttons.purchase.click()

    }



}