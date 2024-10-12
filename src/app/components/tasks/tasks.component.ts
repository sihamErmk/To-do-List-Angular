import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TasksItemComponent } from '../tasks-item/tasks-item.component';
import { TaskService } from '../../services/task.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule here

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TasksItemComponent, HttpClientModule], // Use HttpClientModule
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'], // Fix typo here
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (data) => {
        this.tasks = data;
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }
  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(
      () => {
        this.tasks = this.tasks.filter((t)=>t.id !==task.id);
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );


  }
}
