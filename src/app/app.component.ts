import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'medical';

  constructor(){}

  @HostListener('window:scroll') 
    onWindowScroll()
    {
         let nav = document.querySelector('.navbar');
         if(window.pageYOffset > nav.clientHeight)
         {
           nav.classList.add("fixed-top")
         } 
         else
         {
           nav.classList.remove("fixed-top")
         }
    }

  ngOnInit()
  {
    
    
  }
  
}
