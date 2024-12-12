import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-new-mail',
  templateUrl: './new-mail.page.html',
  styleUrls: ['./new-mail.page.scss']
})
export class NewMailPage implements OnInit {
  private mailService = inject(MailService);
  private router = inject(Router);
  public isToastOpen = false;

  fg = new FormGroup({
    subject: new FormControl(),
    from: new FormControl(),
    fromName: new FormControl(),
    message: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  submitNewMail(){
    let subject = this.fg.controls.subject.value; 
    let from = this.fg.controls.from.value; 
    let fromName = this.fg.controls.fromName.value; 
    let message = this.fg.controls.message.value; 

    this.mailService.newMail(subject, from, fromName, message);
    this.setOpen(true);
    
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
    if(!isOpen){
      this.router.navigate(['/']);
    }
  }

}
