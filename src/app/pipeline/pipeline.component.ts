import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent implements OnInit {

  constructor(private _Router:Router){ }

  ngOnInit(): void {
  }
  change()
  {
         this._Router.navigate(['home'])
  }

}
