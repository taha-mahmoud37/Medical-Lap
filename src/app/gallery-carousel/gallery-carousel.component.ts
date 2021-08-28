import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-gallery-carousel',
  templateUrl: './gallery-carousel.component.html',
  styleUrls: ['./gallery-carousel.component.scss']
})
export class GalleryCarouselComponent implements OnInit {

  constructor (private _Router : Router) { }

  ngOnInit(): void {
    $('.one-time').slick({
      dots: true,
      infinite: true,
      arrows:false,
      autoplaySpeed:1000,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: false
    });
  }
  change()
  {
         this._Router.navigate(['home'])
  }
}
