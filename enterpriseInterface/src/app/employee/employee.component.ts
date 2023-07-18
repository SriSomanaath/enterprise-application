import { Component , OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class EmployeeComponent implements OnInit{

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(){

  }

  onSubmit(form: NgForm) {}

}
