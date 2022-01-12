import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('myModal') modal: ElementRef;

  public form: FormGroup;
  firstname = new FormControl("", Validators.required);
  email = new FormControl("", Validators.required);
  lastname = new FormControl("", Validators.required);
  company = new FormControl("", Validators.required);
  message = new FormControl("", Validators.required);
  companysize = new FormControl("", Validators.required);
  phone = new FormControl("", Validators.required);
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "firstname": this.firstname,
      "lastname": this.lastname,
      "company": this.company,
      "message": this.message ,
      "email": this.email,
      "companysize": this.companysize,
      "phone" : this.phone
    });
  }

  ngOnInit() {
  }

  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }

  onSubmit(){
    
  }
}
