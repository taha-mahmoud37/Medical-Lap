import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _Router: Router) { }

  ngOnInit(): void {
     /*testimonials*/
 $(".slider").slick({
 
  // normal options...
  infinite: true,
  arrows:false,
  dots:false,
  autoplaySpeed:3000,
  autoplay:true,

  // the magic
  responsive: [{
 
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
 
    },
    {
 
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      }
 
    },{
 
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
 
    },{
 
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
 
    }, {
 
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }

      
 
    }]
});
 /*testimonials*/


 /*progress bar*/
 $('.one.circle').circleProgress({
  value: 0.3
 }).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').css("color" , "#fff").html(Math.round(25 * progress) );
 });
 $('.second.circle').circleProgress({
  value: 0.9
 }).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').css("color" , "#fff").html(Math.round(893 * progress) );
 });
 $('.thrid.circle').circleProgress({
  value: 0.5
 }).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').css("color" , "#fff").html(Math.round(78 * progress) );
 });
 $('.four.circle').circleProgress({
  value: 0.6
 }).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').css("color" , "#fff").html(Math.round(673 * progress) );
 });
 $('.five.circle').circleProgress({
  value: 0.7
 }).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').css("color" , "#fff").html(Math.round(751 * progress) );
 });
     
 /*progress bar*/

  }
  change()
  {
         this._Router.navigate(['home'])
  }

}
