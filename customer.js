
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
    

}
class Supplier extends Customer{
    constructor(accountNumber){
      super()
      this.accountNumber=accountNumber
      
  
    }
    invoices=[]

  }