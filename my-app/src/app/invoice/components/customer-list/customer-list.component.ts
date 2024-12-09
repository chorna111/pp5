import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import {Customer} from '../../models/customer'



@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit,OnDestroy{
  customerList: Customer[]=[]
  constructor(
    private customerService:CustomerService,
    private router:Router
  ){

    console.log(this.customerService.getCustomers())
  }
  ngOnDestroy(): void {
    console.log('Opuszczam komponent')
  }
  ngOnInit(): void {
    this.customerList=this.customerService.getCustomers()
  }

  redirect(){
    this.router.navigate(['/invoice/customer-form'])
  }
  deleteCustomer(customer:Customer){
    console.log('rodzic ma usunąć',customer)
    this.customerList=this.customerService.removeCustomer(customer)




  }
}
