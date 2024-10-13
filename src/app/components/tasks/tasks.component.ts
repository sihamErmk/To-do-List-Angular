import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TasksItemComponent } from '../tasks-item/tasks-item.component';
import { TaskService } from '../../services/task.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule here
import { AddTaskComponent } from '../add-task/add-task.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TasksItemComponent, HttpClientModule,AddTaskComponent,FormsModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
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
  deleteTask(task: Task) {
    console.log("Deleting task:", task); // Log task details before deleting
    this.taskService.deleteTask(task).subscribe(
      () => {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
      },
      (error) => {
        console.error('Error deleting task:', error);
      }
    );
  }
  toggleReminder(task:Task){

    // return the task reminder  just to the opposite of  it is
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe(
      (updatedTask) => {
        this.tasks = this.tasks.map((t)=>(t.id ===updatedTask.id?updatedTask :t));

      },
      (error) => {
        console.error('Error updating task reminder:', error);
      }
    );


  }
  addTask(task:Task){
    this.taskService.addTask(task).subscribe(
      (data) => {
        this.tasks.push(data)},
        (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }
}
