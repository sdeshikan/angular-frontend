import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }

  saveEmployee() {
    this.empService.saveEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.router.navigate(['employees']);
    }, error => console.log(error))
  }

}
