import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('modal') modal: ModalComponent

  
  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.modal.open();
  }

}
