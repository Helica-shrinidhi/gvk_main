import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {  SwiperComponent } from "swiper/angular";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation])
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,  
})
export class AboutComponent implements OnInit {
  // Fmapprovalpath: "/assets/FM Approval-42HTLS-Clean.pdf";
  @ViewChild("outsideElement", {static: true}) outsideElement : ElementRef;
  @ViewChild('modalView', {static: true}) modalView$ : ElementRef;
  constructor() { }

  ngOnInit() {
  }
openfmapprovalpdf(){
  window.open("https://drive.google.com/file/d/1VkRAzh5uIoLc-cPXP1StZoQ6L1imRqbR/view?usp=sharing",'_blank');
}
openmurphyandsonspdf(){
    window.open("https://drive.google.com/file/d/1A1RZa2eSrPFm9w07y2QKa3vI1_uw1gCo/view?usp=sharing",'_blank');
}
}
