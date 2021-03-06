import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string ='';
  allowReset = false;

  OnupdateInput() {
    if(this.username.length!=0){
      this.allowReset=true;
    }else {
      this.allowReset=false;
    }
  }
  OnReset() {
    this.username='';
  }
}
