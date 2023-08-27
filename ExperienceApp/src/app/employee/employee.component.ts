import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(public  employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(employeeForm){

  }

  resetForm(form?: NgForm){
  if(form)
    form.reset();
    this.employeeService.selectedEmployee = {
    _id:"",
    name:"",
    position:"",
    office:"",
    salary:null
  }


  }

}
