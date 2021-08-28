import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private _Router:Router) { }

  ngOnInit(): void {
  }
  change()
  {
         this._Router.navigate(['home'])
  }

}
