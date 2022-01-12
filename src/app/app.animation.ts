import { trigger, transition, style, animate, keyframes } from '@angular/animations';


export const carouselZoomEffect = trigger('fade', [
    transition('void => *', [ animate('3000ms', 
    keyframes([
      style({  transform: "scale(1.1, 1.1)" , offset: 0 }),
      style({ transform: "scale(1, 1)", offset: 0.50 }),
      style({  transform: "scale(1, 1)", offset: 1 }),
    ])
      )]),
    transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
  ])

  export const fadeInEntry = trigger('fadeIn', [
    transition('void => *', [style({ opacity: 0, transform:"translateY(100%)" }), animate('300ms ease-in', style({ opacity: 1,  transform:"translateY(-100%)"}))]),
    // transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
  ])

export const insertRemoveEffect = trigger('myInsertRemoveTrigger', [
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
  ])