import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-crompton',
  templateUrl: './crompton.component.html',
  styleUrls: ['./crompton.component.scss']
})
export class CromptonComponent implements OnInit ,AfterViewInit{
  nums: Array<number> = [25, 76, 48];

  @ViewChild("oneItem") oneItem: any;
  @ViewChildren("count") count: QueryList<any>;

  constructor(private elRef: ElementRef) {}
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.animateCount();
  }
  animateCount() {
    let _this = this;

    let single = this.oneItem.nativeElement.innerHTML;

    this.counterFunc(single, this.oneItem, 7000);

    this.count.forEach(item => {
      _this.counterFunc(item.nativeElement.innerHTML, item, 2000);
    });
  }

  counterFunc(end: number, element: any, duration: number) {
    let range, current: number, step, timer;

    range = end - 0;
    current = 0;
    step = Math.abs(Math.floor(duration / range));

    timer = setInterval(() => {
      current += 1;
      element.nativeElement.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  }

fan(){
  window.open('https://web.s-cdn.boostkit.dev/webaction-files/597c6bbfee786c8284e8d3bb_uploadpdf/crompton-fans-decor-catalogue-2020-5ffea83880b6b8000158ed63.pdf','_blank')
}
lighting(){
  window.open('https://www.innovatorspune.com/pricelist/Crompton%20Greaves%20LED%20Lighting%20%20Lamps%20Catalogue%20&%20Price%20List%202021.pdf','_blank')
}
appliances(){
  window.open('http://5.imimg.com/data5/VH/GS/QG/GLADMIN-3061/crompton-10-l-storage-geyser-solarium-aura-white.pdf','_blank');
}
pumps(){
  window.open('http://www.mittalmachinery.in/downloads/products/Crompton-Resi-Pumps.pdf','_blank');
}

}
