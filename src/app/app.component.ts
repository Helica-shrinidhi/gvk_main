import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'GVK';
  
  public loading : boolean = true;
  public mainContentEnter : boolean = false;
 
  onActivate(event) {
    window.scroll(0,0);
}




  ngOnInit(){
   
    
    (async () => { 
     
      await this.delay(5000);
      this.loading = false;

      await this.delay(3000);
      this.mainContentEnter = true;
    
  })();
  }

  ngAfterViewInit(){
     const header = document.getElementById("header");
     const sticky = header.offsetTop;

     window.onscroll = function() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        console.log("added");
        
      } else {
        header.classList.remove("sticky");
        console.log("removed");
        
      }
    };
  }
  constructor(){

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  

  
}
