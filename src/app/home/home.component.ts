import { Renderer2 } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {EventEmitter} from '@angular/core'
import { event } from 'jquery';
import { EventTargetLike } from 'rxjs/internal/observable/fromEvent';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  

  constructor(private _Renderer2:Renderer2) {
    
     
   }


  ngOnInit(): void {
    
    $(".slick-carousel").slick({
 
      // normal options...
      infinite: true,
      autoplaySpeed:2000,
      dots: false,
      arrows: false,
      autoplay:true,
      fade: true,
      
      
     
      // the magic
      responsive: [{
     
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            infinite: true,
            dots: false,
            
          }
     
        }, {
     
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            infinite: true,

            dots: false,
            
          }
     
        }, {
     
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            infinite: true,

            dots: false,
            
          }
         
     
        }]
    });
   

    let images = Array.from(document.querySelectorAll(".pop-img")as NodeListOf<HTMLElement>) ; 
    let fullWidth = document.querySelector(".full-width") as HTMLElement ;
    let minsWidth = document.querySelector(".mins-width") as HTMLElement;
    let closed = document.getElementById("close") as HTMLElement;
    let prevs = document.getElementById("prev") as HTMLElement;
    let next = document.getElementById("next") as HTMLElement;
    let currentImages = 0;

    for(let i = 0 ; i < images.length ; i++)
    {
      
      
      images[i].addEventListener("click" , function(e: Event){
        fullWidth.style.display = "flex";
         let imgSrc = (e.target as HTMLImageElement).src;
         currentImages = images.indexOf(e.target as HTMLImageElement);
         minsWidth.style.backgroundImage = `url(${imgSrc})`;
         

      })
      

    }

    closed.addEventListener("click" , function(){
      fullWidth.style.display = "none";
    })
    next.addEventListener("click" , function(){
         currentImages++;
         if(currentImages == images.length)
         {
           currentImages = 0;
         }
         minsWidth.style.backgroundImage = `url(${(images[currentImages] as HTMLImageElement).src})`;

    })
    prevs.addEventListener("click" , function(){
      currentImages--;
      if(currentImages < 0)
      {
        currentImages = images.length;
      }
      minsWidth.style.backgroundImage = `url(${(images[currentImages] as HTMLImageElement).src})`;
    })
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

 /*carousel*/
 
 $(".center").slick({
 
  // normal options...
  infinite: true,
  arrows:false,
  dots:false,
  autoplaySpeed:1000,
  autoplay:true,

  // the magic
  responsive: [{
 
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
 
    },
    {
 
      breakpoint: 992,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      }
 
    },{
 
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
 
    },{
 
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
      }
 
    }, {
 
      
      breakpoint: 300,
      settings: "unslick" // destroys slick

      
 
    }]
});

 /*carousel*/


 


 
    
 }

 

 



  
   
  

     


  
}
