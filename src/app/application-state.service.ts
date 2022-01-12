import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  private isMobileResolution: boolean;
  constructor() {}

   public getIsMobileResolution(width:number): boolean {
    if (width < 769) {
      this.isMobileResolution = true;
      
      
    } else {
      this.isMobileResolution = false;
     
      
    }
    return this.isMobileResolution;
  }
}

