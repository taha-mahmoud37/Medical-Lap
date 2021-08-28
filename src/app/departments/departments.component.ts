import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(private _Router:Router) { }

  ngOnInit(): void {
  }
  change()
  {
         this._Router.navigate(['home'])
  }

}
