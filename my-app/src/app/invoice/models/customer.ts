
export class Customer{
  constructor(){}

    id:number=0
    name:string=""
    nip:string=""
    city:string=""
    street:string=""
    houseNumber:string=""
    apartmentNumber:string=""
    postalCode:string=""
    comments:string=""
    field:string=""
    isActive:boolean=false
    adress:string=""
    info:string=""

    getCustomerInfo(){
      this.info=`Nazwa firmy: ${this.name}, Adres: ${this.city}, ul.${this.street} ${this.houseNumber}/${this.apartmentNumber}, ${this.postalCode} `


      return this.info

    }



}
class Supplier extends Customer{
    accountNumber:number
    constructor(accountNumber:number){
      super()
      this.accountNumber=accountNumber


    }
    invoices=[]

  }
