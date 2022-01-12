import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { ApplicationStateService } from '../application-state.service';

@Component({
  selector: 'gvk-header',
  templateUrl: './gvk-header.component.html',
  styleUrls: ['./gvk-header.component.scss']
})
export class GvkHeaderComponent implements OnInit, AfterViewInit {
  public width : number;
  public isMobileResolution: boolean;
  constructor(private applicationStateService: ApplicationStateService) { }

  ngOnInit() {
    this.width = window.innerWidth;
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution(this.width)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution(this.width)
  }

  ngAfterViewInit(){
    // const header = document.getElementById("header");
    // const sticky = header.offsetTop;

  //   window.onscroll = function() {
  //    if (window.pageYOffset > sticky) {
  //      header.classList.add("sticky");
  //    } else {
  //      header.classList.remove("sticky");
  //    }
  //  };
 }
}
