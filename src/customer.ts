
class Customer{

    id=""
    name=""
    nip=""
    city=""
    street=""
    houseNumber=""
    apartmentNumber=""
    postalCode=""
    comments=""
    field=""
    isActive=true
    adress=""
    
    getAdress(){
      this.adress=`Miasto: ${this.city}, ul.${this.street} ${this.houseNumber}/${this.apartmentNumber}, ${this.postalCode}`
    
      
      return this.adress

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