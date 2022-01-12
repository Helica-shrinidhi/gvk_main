import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }

  onPreviousClick(current, carouselImages) {
    
    const previous = current - 1;
    current = previous < 0 ? carouselImages.length - 1 : previous;
    return current
    // console.log("previous clicked, new current slide is: ", this.current);
  }

  onNextClick(current, carouselImages) {
      
      const next = current + 1;
      current = next === carouselImages.length ? 0 : next;
      return current
      // console.log("next clicked, new current slide is: ", this.current);
  
    }

  onDirectClick(current, currentDot){
    current = currentDot
    return current
    console.log(currentDot);
    
  }
}
