import { Component, } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import {  Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title:string = '📒🗓️Task Tracker';
  showAddTask:boolean=false;
  subscription!:Subscription
  
  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToggle().subscribe(
      value=>this.showAddTask=value

    );

  }

  toggleAddTask(){
    this.uiService.toggleAddTask();


  }



}
