import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  private mailService = inject(MailService);
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  public iconList: any[] = [];
  public statusList: any[]= [];
  public emailList: any[] = [];
  public filteredList: any[] =[];
  

  constructor() {}

  ngOnInit() {
    this.iconList = this.mailService.getIconList();
    this.statusList = this.mailService.getStatusList();

    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.filteredList = this.mailService.filterEmails(this.folder);
    console.log(this.emailList);  
  }

  setStatus(emailId:number, statusId:number){
    this.mailService.setStatus(emailId, statusId);
    this.filteredList = this.mailService.filterEmails(this.folder);
  }

  ngDoCheck(){
    this.filteredList = this.mailService.filterEmails(this.folder);
  }

  newMessage(){
    this.router.navigate(['/new-mail']);
  }

}
