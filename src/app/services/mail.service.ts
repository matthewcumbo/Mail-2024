import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  public statusList: string[] = [];
  public iconList: string[] = [];
  public emailList: any[] = [];
  public filteredList: any[] =[];

  constructor() { 
    this.loadEmails();
  }

  getStatusList(){
    this.statusList = ["unread","read","sent","favourites","archived","deleted","spam"];
    return this.statusList;
  }

  getIconList(){
    this.iconList = ["mail","mail-open","paper-plane","heart","archive","trash","warning"];
    return this.iconList;
  }

  loadEmails(){
    this.emailList = [
      {
        id:1,
        subject:"Subject 1",
        from:"hello@hello.com",
        fromName:"Joe Borg",
        message:"Message from Joe Borg.",
        status:1,
        icon:1
      },
      {
        id:2,
        subject:"Subject 2",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:2,
        icon:2
      },
      {
        id:3,
        subject:"Subject 3",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:2,
        icon:2
      },
      {
        id:4,
        subject:"Subject 4",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:2,
        icon:2
      },
      {
        id:5,
        subject:"Subject 5",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:2,
        icon:2
      },
      {
        id:6,
        subject:"Subject 6",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:1,
        icon:1
      },
      {
        id:7,
        subject:"Subject 7",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:1,
        icon:1
      },
      {
        id:2,
        subject:"Subject 2",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:2,
        icon:2
      },
      {
        id:8,
        subject:"Subject 8",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:3,
        icon:3
      },
      {
        id:9,
        subject:"Subject 9",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:3,
        icon:3
      },
      {
        id:10,
        subject:"Subject 10",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:3,
        icon:3
      },
      {
        id:11,
        subject:"Subject 11",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:4,
        icon:4
      },
      {
        id:12,
        subject:"Subject 12",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:4,
        icon:4
      },
      {
        id:13,
        subject:"Subject 13",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:4,
        icon:4
      },
      {
        id:14,
        subject:"Subject 14",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:5,
        icon:5
      },
      {
        id:15,
        subject:"Subject 15",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:5,
        icon:5
      },
      {
        id:16,
        subject:"Subject 16",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:5,
        icon:5
      },
      {
        id:17,
        subject:"Subject 17",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:6,
        icon:6
      },
      {
        id:18,
        subject:"Subject 18",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:6,
        icon:6
      },
      {
        id:19,
        subject:"Subject 19",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:6,
        icon:6
      },
      {
        id:20,
        subject:"Subject 20",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:3,
        icon:3
      },
      {
        id:21,
        subject:"Subject 21",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:4,
        icon:4
      },
      {
        id:22,
        subject:"Subject 22",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:3,
        icon:3
      },
      {
        id:23,
        subject:"Subject 23",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:6,
        icon:6
      },
      {
        id:24,
        subject:"Subject 24",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:5,
        icon:5
      },
      {
        id:25,
        subject:"Subject 25",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:5,
        icon:5
      },
      {
        id:26,
        subject:"Subject 26",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:2,
        icon:2
      },
      {
        id:27,
        subject:"Subject 27",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:2,
        icon:2
      },
      {
        id:28,
        subject:"Subject 28",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:2,
        icon:2
      },
      {
        id:29,
        subject:"Subject 29",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:0,
        icon:0
      },
      {
        id:30,
        subject:"Subject 30",
        from:"hellogmail.com",
        fromName:"Jane Doe",
        message:"Jane says hello.",
        status:0,
        icon:0
      }
    ];

    return this.emailList;
  }

  filterEmails(folder:string){
    switch(folder){
      case "Inbox":{
        this.filteredList = this.emailList.filter(
          x => x.status == 1 ||
          x.status == 0 ||
          x.status == 3);
          break;
      }
      case "Sent":{
        this.filteredList = this.emailList.filter(
          x => x.status == 2);
          break;
      }
      case "Favorites":{
        this.filteredList = this.emailList.filter(
          x => x.status == 3);
          break;
      }
      case "Archived":{
        this.filteredList = this.emailList.filter(
          x => x.status == 4);
          break;
      }
      case "Deleted":{
        this.filteredList = this.emailList.filter(
          x => x.status == 5);
          break;
      }
      case "Spam":{
        this.filteredList = this.emailList.filter(
          x => x.status == 6);
          break;
      }
      default:{
        this.filteredList = this.emailList.filter(
          x => x.status == 1 ||
          x.status == 0 ||
          x.status == 3);
          break;
      }
    }
    return this.filteredList;
  }

  setStatus(emailId:number,statusId:number){
    this.emailList.find(x => x.id == emailId).status = statusId;
    this.emailList.find(x => x.id == emailId).icon = statusId;
  }

  newMail(subject:string, from:string, fromName:string, message:string){
    this.emailList.push({
      id:100,
      subject:subject,
      from:from,
      fromName:fromName,
      message:message,
      status:0,
      icon:0
    });
  }

}
