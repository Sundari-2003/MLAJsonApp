import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import employeeData from './employeedata.json';
import { Employee } from './employee';
import { DataTablesModule } from 'angular-datatables';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    DataTablesModule

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MLAJsonApp');
  employees : Employee[]= employeeData;
}
