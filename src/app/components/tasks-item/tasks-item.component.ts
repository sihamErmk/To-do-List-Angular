import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-tasks-item',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css'
})
export class TasksItemComponent {
  @Input() task!:Task;
  @Output() ondeleteTask :EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder : EventEmitter<Task>=new EventEmitter();
  faTimes = faTimes;
  onDelete(task:Task ){
   this.ondeleteTask.emit(task);

  }
  onToggle(task:Task){
    this.onToggleReminder.emit(task);

  }




}
