import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private _Router:Router) { }

  ngOnInit(): void {
  }

  change()
  {
         this._Router.navigate(['home'])
  }

}
