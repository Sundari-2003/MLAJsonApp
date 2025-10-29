import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import employeeData from './employees.json';
import { Employee } from './employee';
import { DataTablesModule } from '@angular-datatables';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DataTablesModule,
    BrowserModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MLAJsonApp');
  employees : Employee[]= employeeData;
}
