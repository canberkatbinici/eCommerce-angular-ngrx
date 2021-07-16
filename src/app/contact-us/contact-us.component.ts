import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
    messageForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.messageForm = this.fb.group({
      name: new FormControl ('',Validators.required),
      email: new FormControl ('',Validators.email),
      message: new FormControl ('',Validators.required)
    });
  }

  ngOnInit() {
  }

}
