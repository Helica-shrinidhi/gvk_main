import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
  email='info@gvkengg.com';

  constructor() { }

  ngOnInit() {
  }
  menuClickHandler(){
    console.log("Menu button is clicked");
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("body").style.overflowY="hidden";
    // document.getElementById("menu").classList.toggle('');
    // (document.getElementById("menu") as HTMLInputElement).disabled = true;
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("body").style.overflowY="visible";
    document.getElementById("menu").classList.toggle('active');

  }
  closeNavLogo() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("body").style.overflowY="visible";
  }
 
}
