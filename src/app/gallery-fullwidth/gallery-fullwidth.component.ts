import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-gallery-fullwidth',
  templateUrl: './gallery-fullwidth.component.html',
  styleUrls: ['./gallery-fullwidth.component.scss']
})
export class GalleryFullwidthComponent implements OnInit {

    
  constructor(private _Router: Router) { 
   
  }

  ngOnInit(): void {
    

/*
    $('#medicals').click(function(){
      $('#medicall').css("opacity" ,"1").fadeIn(500);
      $('#all').hide(500);
      $('#clinic').hide(500);
      $('#dental').hide(500);
      $('#pharmacists').hide(500);
    })
    $('#alls').click(function(){
      $('#medicall').hide(500);
      $('#all').fadeIn(500);
      $('#clinic').hide(500);
      $('#dental').hide(500);
      $('#pharmacists').hide(500);
    })
    $('#clinics').click(function(){
      $('#medicall').hide(500);
      $('#all').hide(500);
      $('#clinic').css("opacity" ,"1").fadeIn(500);
      $('#dental').hide(500);
      $('#pharmacists').hide(500);
    })
    $('#dentals').click(function(){
      $('#medicall').hide(500);
      $('#all').hide(500);
      $('#clinic').hide(500);
      $('#dental').css("opacity" ,"1").fadeIn(500);
      $('#pharmacists').hide(500);
    })
    $('#pharma').click(function(){
      $('#medicall').hide(500);
      $('#all').hide(500);
      $('#clinic').hide(500);
      $('#dental').hide(500);
      $('#pharmacists').css("opacity" ,"1").fadeIn(500);
    })
   
 */

  }
  change()
  {
         this._Router.navigate(['home'])
  }
    alls = document.getElementById("all") as HTMLElement;
    medical= document.getElementById("medicall") as HTMLElement;
    clinics = document.getElementById("clinic") as HTMLElement;
    dentals = document.getElementById("dental") as HTMLElement;
    pharmas = document.getElementById("pharmacists") as HTMLElement;


  all()
  {
    let alls = document.getElementById("all") as HTMLElement;
    let medical= document.getElementById("medicall") as HTMLElement;
    let clinics = document.getElementById("clinic") as HTMLElement;
    let dentals = document.getElementById("dental") as HTMLElement;
    let pharmas = document.getElementById("pharmacists") as HTMLElement;

    alls.style.display= "flex";
    medical.style.display="none";
    clinics.style.display= "none";
    dentals.style.display="none";
    pharmas.style.display= "none";
    
  }
  medicall()
  {
    let alls = document.getElementById("all") as HTMLElement;
    let medical= document.getElementById("medicall") as HTMLElement;
    let clinics = document.getElementById("clinic") as HTMLElement;
    let dentals = document.getElementById("dental") as HTMLElement;
    let pharmas = document.getElementById("pharmacists") as HTMLElement;

    alls.style.display= "none";
    medical.style.display="flex";
    clinics.style.display= "none";
    dentals.style.display="none";
    pharmas.style.display= "none";
    
  }
  clinic()
  {
    

    let alls = document.getElementById("all") as HTMLElement;
    let medical= document.getElementById("medicall") as HTMLElement;
    let clinics = document.getElementById("clinic") as HTMLElement;
    let dentals = document.getElementById("dental") as HTMLElement;
    let pharmas = document.getElementById("pharmacists") as HTMLElement;

    alls.style.display= "none";
    medical.style.display="none";
    clinics.style.display= "flex";
    dentals.style.display="none";
    pharmas.style.display= "none";
    
  }
  dental()
  {
    let alls = document.getElementById("all") as HTMLElement;
    let medical= document.getElementById("medicall") as HTMLElement;
    let clinics = document.getElementById("clinic") as HTMLElement;
    let dentals = document.getElementById("dental") as HTMLElement;
    let pharmas = document.getElementById("pharmacists") as HTMLElement;

    alls.style.display= "none";
    medical.style.display="none";
    clinics.style.display= "none";
    dentals.style.display="flex";
    pharmas.style.display= "none";
    
  }
  pharma()
  {
    let alls = document.getElementById("all") as HTMLElement;
    let medical= document.getElementById("medicall") as HTMLElement;
    let clinics = document.getElementById("clinic") as HTMLElement;
    let dentals = document.getElementById("dental") as HTMLElement;
    let pharmas = document.getElementById("pharmacists") as HTMLElement;

    alls.style.display= "none";
    medical.style.display="none";
    clinics.style.display= "none";
    dentals.style.display="none";
    pharmas.style.display= "flex";
    
  }
 
 


}
