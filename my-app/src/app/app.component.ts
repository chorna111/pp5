import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './invoice/components/customer-form/customer-form.component';
import { Invoice } from './invoice/models/invoice';
import { InvoiceModule } from './invoice/invoice.module';
import { ProductModule } from './product/product.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,InvoiceModule,ProductModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Nastia';


}
