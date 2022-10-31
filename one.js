class pharmacist{
    constructor(name){
        this.name = name;
        this.writePrescription = this.writePrescription.bind(this)
    }

    writePrescription(){
        console.log('The presciption was given: '.concat(this.name))
    }
}



class Cashier{
    constructor(name){
        this.name = name
        this.collectCash = this.collectCash.bind(this)
        this.returnCash = this.returnCash.bind(this)
    }

    collectCash(){
        console.log('Cash is collected by:'.concat(this.name));
    }

    returnCash(){
        console.log('Cash is returned by:'.concat(this.name) );
    }


}

class Manager {

    constructor(name){
        this.name =name
        this.manage.bind(this)
    }

    manage(){
        console.log(this.name.concat(' is managing employees '));
    }
}

const mixInCashier ={
    collectCash(){
        console.log('cash is collected by :'.concat(this.name))
    },

    returnCash(){
        console.log('cash is returned by :'.concat(this.name))
    }
}

const mixInpharmacist ={
    writePrescription(){
        console.log('the presciption is given by :'.concat(this.name))
    }
}


Object.assign(Manager.prototype, mixInCashier,mixInpharmacist)

const mr = new Manager('the manager')
const ph = new pharmacist('the pharmacist')
const cashier = new Cashier('the Cashier')

mr.collectCash()
mr.returnCash()
mr.writePrescription()
ph.writePrescription()
cashier.returnCash()
mr.manage()



