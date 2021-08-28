import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private _Router:Router) { }

  ngOnInit(): void {
  }
  change()
  {
         this._Router.navigate(['home'])
  }

}
