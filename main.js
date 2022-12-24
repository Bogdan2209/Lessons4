// 1 Завдання 
class Worker{
    constructor(firstName,secondName,rate,days){
        this.firstName=firstName
        this.secondName=secondName
        this.rate=rate
        this.days=days
    }
    getSalary(){
       return this.rate*this.days
    }
}


let petro = new Worker(`Petro`,`Petpiv`,`100`,`5`)
let barbara = new Worker(`Ivan`,`Ivanov`,`950`,`7`)


document.write(`<h2>1 Працівник :  ${petro.firstName} ${petro.secondName}. Зарпата за день ${petro.rate}грн. Відпрацьованих днів :  ${petro.days} ____ Зарплата за місяць<span style="color:red"> ${petro.getSalary()}грн.</span></h2>`)

document.write(`<h2>2 Працівник :  ${barbara.firstName} ${barbara.secondName}. Зарпата за день ${barbara.rate}грн. Відпрацьованих днів :  ${barbara.days} ____ Зарплата за місяць <span style="color:red"> ${barbara.getSalary()}грн. </span></h2>`)




// 2 Завдання 



let newName
class MyString {
    reverse(str) {
        return this.str = str.split("").reverse().join("")
    }
    ucFirst(str) {
        this.str = str
        newName = str.charAt(0).toUpperCase()
        for (let i = 1; i < str.length; i++) {
             newName += str.charAt(i).toLowerCase()
        }
        return newName


    }
    ucWords(str){
        this.str=str
        return str.split(/\s+/).map(word=>word[0].toUpperCase()+word.substring(1)).join(` `)

    }
}






let newStr = new MyString()
console.log(newStr.reverse(`IVAN`))
console.log(newStr.ucFirst(`arsenal`))
console.log(newStr.ucWords(`arsenal arsenal arsenal`))




// 3 Завдання




class CoffeeMake{
    on(){
        console.log(`Make Coffee`)
    }
    off(){
        console.log(`You coffee is ready`)
    }
}


class Coffee1 extends CoffeeMake{
    milk(){
        console.log(`milk`)
    }
}
class Coffee2 extends CoffeeMake{
    sugar(){
        console.log(`sugar`)
    }
}
class Coffee3 extends CoffeeMake{
    water(){
        console.log(`water`)
    }
}


let pp = new Coffee2()
pp.sugar()