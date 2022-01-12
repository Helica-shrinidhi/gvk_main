import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { ApplicationStateService } from '../application-state.service';
import { CarouselService } from '../carousel.service';
import { carouselZoomEffect, fadeInEntry } from '../app.animation';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations:[ fadeInEntry, carouselZoomEffect]
})
export class HomepageComponent implements OnInit, AfterViewInit {
  public current : number = 0;
  public stopFlag : boolean = false;
  public currentPrj : number = 0;
  public form: FormGroup;
  public width;
  public isMobileResolution;
  public prjCarouselImages;
  public isSmallScreen;
  public carouselImages;
  private projectCarousel;
  private contentClassEl;
  public isPrjCarouselEnteringIntoView;
  public isfadeInClassElEnteringIntoView;
  private isAnimationActive = true;
  private isFadeInActive = true;
  name = new FormControl("", Validators.required);
  email = new FormControl("", Validators.required);
  company = new FormControl("", Validators.required);
  message = new FormControl("", Validators.required);
  constructor(private fb: FormBuilder, 
              private applicationStateService : ApplicationStateService,
              private carouselService: CarouselService) {
    this.form = fb.group({
      "name": this.name,
      "email": this.email,
      "company": this.company,
      "message": this.message  
    });
  }

  

  desktopPrjCarouselImages = [
    { path: "/assets/pr-cl-1.jpg"},
    { path: "/assets/pr-cl-2.jpg"},
    { path: "/assets/pr-cl-3.jpg"}
  ]

  mobilePrjCarouselImages = [
    { path: "/assets/pr-mb-1.jpg"},
    { path: "/assets/pr-mb-2.jpeg"},
    { path: "/assets/pr-mb-3.jpeg"}
  ]
  carouselContents = [
    { 
      header: "T-FIT",
      text: "High performance insulation for demanding processing environments."
    },
    { 
      header:"CROMPTON",
      text: "Fast tool free installation."
    },
    { 
      header: "L&T SWITCHGEAR",
      text: "Lighting for every need."
    },
    { 
      header: "RISHAB INSTRUMENTS",
      text: "5KV digital insulation tester"
    }
  ]

  ngOnInit() {
    this.setCarouselImages()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
   this.setCarouselImages()
  }
  ngAfterViewInit(){
    this.projectCarousel = document.getElementById("projectCarousel");
    this.contentClassEl = document.getElementsByClassName('content');
    
  }
  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView(){
    if (this.projectCarousel && this.isAnimationActive){
      const rect = this.projectCarousel.getBoundingClientRect();
      const topShown = rect.top >= 0 && rect.top <= window.innerHeight;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isPrjCarouselEnteringIntoView = topShown 
      if (this.isPrjCarouselEnteringIntoView ){
        this.projectCarousel.classList.add("heightAnimate");
        for (var i = 0; i < this.contentClassEl.length; i++) {
          this.contentClassEl[i].classList.add("opacityAnimate");
          this.isAnimationActive = false
        }
      }
      else {
        this.projectCarousel.classList.remove("heightAnimate");
        for (var i = 0; i < this.contentClassEl.length; i++) {
          this.contentClassEl[i].classList.remove("opacityAnimate");
        }
      }
    }
    
  }

  onPreviousClick() {
    this.stopFlag = true;
    this.current = this.carouselService.onPreviousClick(this.current, this.carouselImages)
  }

  onNextClick() {
      this.stopFlag = true;
      this.current = this.carouselService.onNextClick(this.current, this.carouselImages)
  
    }

  onDirectClick(currentDot){
    this.current = this.carouselService.onDirectClick(this.current, currentDot) 
  }

  onNextProjectClick(){
    const next = this.currentPrj + 1;
    this.currentPrj = next === this.prjCarouselImages.length ? 0 : next;
  }  

  onSubmit(){

  }

  setCarouselImages(){
    this.width = window.innerWidth;
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution(this.width)
    if (this.width<600){
      this.isSmallScreen = true
    }
    else{
      this.isSmallScreen = false
    }
    
    if (this.isMobileResolution){
      this.prjCarouselImages = this.mobilePrjCarouselImages
     
    }
    else{
      this.prjCarouselImages = this.desktopPrjCarouselImages
      
    }

  }
  scrolltoanimategrp(){
    var el=document.getElementById("scroll-loc")
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
      
  }
  addAnimation(){

  }
}
