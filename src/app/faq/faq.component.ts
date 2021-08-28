import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {

  constructor(private _Router: Router) { }

  ngOnInit(): void {
  }
  change()
  {
         this._Router.navigate(['home'])
  }
}
