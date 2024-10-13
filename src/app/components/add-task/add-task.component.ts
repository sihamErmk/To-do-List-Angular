import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription, take } from 'rxjs';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  text! :string;
  day!:string;
  reminder:boolean=false;
  showAddTask:boolean=false;
  subscription:Subscription;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

onSubmit(){
  if(!this.text){
    alert("Please add the text !");
    return;
  }
  const newTask ={
    text:this.text,
    day:this.day,
    reminder:this.reminder
  }
  //emit event
  this.onAddTask.emit(newTask);


  this.text ="";
  this.day = "";
  this.reminder =false;

}
constructor(private uiService:UiService){
  this.subscription = this.uiService
  .onToggle()
  .subscribe(
    value=>this.showAddTask=value

  );

}
}
