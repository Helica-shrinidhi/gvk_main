import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { GvkFooterComponent } from '../gvk-footer/gvk-footer.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ]),
    trigger('myInsertRemoveTrigger', [
      transition(':leave', [

        animate('3000ms ease',
        keyframes([
          style({ opacity: 1, transform: "translateZ(-100px)", offset: 0.25 }),
          style({ opacity: 1, transform: "translateZ(-100px)", offset: 0.75 }),
          style({ opacity: 1, transform: "translateZ(-100px) translateY(-200%)", offset: 1 }),
        ])),
      ]),
      transition(':enter', [
        style({ opacity: 0, transform: "translateZ(-100px) translateY(200%)"}),
        animate('3000ms ease', keyframes([
          style({ opacity: 1, transform: "translateZ(-100px) translateY(200%)", offset: 0.25 }),
          style({ opacity: 1, transform: "translateZ(-100px)", offset: 0.75 }),
          style({ opacity: 1, transform: "translateZ(0) translateX(0)", offset: 1 }),
        ]))
      ]), 
    ]),
  ]
})
export class ProductsComponent implements OnInit {
  public current : number = 0;
  public stopFlag : boolean = false;
  public currentPrj : number = 0;
  carouselImages = [
    { path: "/assets/gvk-carousal-1.png"},
    { path: "/assets/crompton-2.png"},
    { path: "/assets/switchgear.jpg"},
    { path: "/assets/rishab_instruments.png"}
  ]

  prjCarouselImages = [
    { path: "/assets/pr-cl-1.jpg"},
    { path: "/assets/pr-cl-2.jpg"},
    { path: "/assets/pr-cl-3.jpg"}
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
      header: "RISHAB INDUSTRIES",
      text: "5KV digital insulation tester"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  onPreviousClick() {
    this.stopFlag = true;
    const previous = this.current - 1;
    this.current = previous < 0 ? this.carouselImages.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.current);
  }

  onNextClick() {
      this.stopFlag = true;
      const next = this.current + 1;
      this.current = next === this.carouselImages.length ? 0 : next;
      console.log("next clicked, new current slide is: ", this.current);
  
    }

  onDirectClick(){
    this.current = ++this.current % this.carouselImages.length;
  }

  onNextProjectClick(){
    const next = this.currentPrj + 1;
    this.currentPrj = next === this.carouselImages.length ? 0 : next;
  }  
}
