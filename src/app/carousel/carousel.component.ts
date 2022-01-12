import { Component, HostListener, OnInit } from '@angular/core';
import { ApplicationStateService } from '../application-state.service';
import { CarouselService } from '../carousel.service';
import { carouselZoomEffect } from '../app.animation'
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations:[ carouselZoomEffect]
})
export class CarouselComponent implements OnInit {
  public current : number = 0;
  public stopFlag : boolean = false;
  public currentPrj : number = 0;
  public width;
  public isMobileResolution;
  public carouselImages;
  constructor(private applicationStateService : ApplicationStateService,
    private carouselService: CarouselService) { }

  ngOnInit() {
    this.setCarouselImages()
     setInterval(() => {
      if(!this.stopFlag){
        this.current = ++this.current % this.carouselImages.length;
      } 
    }, 4000);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
   this.setCarouselImages()
  }
  desktopCarouselImages = [
    { path: "/assets/dt-cr-1.png"},
    { path: "/assets/dt-cr-2.png"},
    { path: "/assets/dt-cr-3.png"},
    { path: "/assets/dt-cr-4.png"}
  ]

  mobileCarouselImages = [
    { path: "/assets/mb-cr-1.png"},
    { path: "/assets/mb-cr-2.png"},
    { path: "/assets/mb-cr-3.png"},
    { path: "/assets/mb-cr-4.png"}
  ]

  carouselContents = [
    { 
      header: "T-FIT",
      text: "High performance insulation for demanding processing environments.",
      img:"/assets/t-fit.png"
    },
    { 
      header:"CROMPTON",
      text: "Fast tool free installation.",
      img:"/assets/clg.png"
    },
    { 
      header: "L&T SWITCHGEAR",
      text: "Lighting for every need.",
      img:"/assets/lnt.png"
    },
    { 
      header: "RISHAB INSTRUMENTS",
      text: "5KV digital insulation tester",
      img:"/assets/ri.png"
    }
  ]
  onPreviousClick() {
    this.stopFlag = true;
    this.current = this.carouselService.onPreviousClick(this.current, this.carouselImages)
  }

  onNextClick() {
      this.stopFlag = true;
      this.current = this.carouselService.onNextClick(this.current, this.carouselImages)
  
    }

  onDirectClick(currentDot){
    this.stopFlag = true;
    this.current = this.carouselService.onDirectClick(this.current, currentDot) 
  }


  setCarouselImages(){
    this.width = window.innerWidth;
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution(this.width)
    
    
    if (this.isMobileResolution){
      this.carouselImages = this.mobileCarouselImages
     
    }
    else{
      this.carouselImages = this.desktopCarouselImages
      
    }

  }
}
