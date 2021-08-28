import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private _Router:Router) { }

  ngOnInit(): void {
  }
  change()
  {
         this._Router.navigate(['home'])
  }

}
