import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksComponent } from './src/app/components/tasks/tasks.component';
import { TaskService } from './src/app/services/task.service';
import { of, throwError } from 'rxjs';
import { Task } from './src/app/Task';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;
  let mockTaskService:any;

  beforeEach(async () => {
    mockTaskService = jasmine.createSpyObj(['getTasks', 'deleteTask', 'updateTaskReminder', 'addTask']);

    await TestBed.configureTestingModule({
      declarations: [TasksComponent],
      providers: [
        { provide: TaskService, useValue: mockTaskService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
  });

  it('should fetch tasks on init', () => {
    const mockTasks: Task[] = [{ id: 1, text: 'Test Task',day:'day', reminder: false }];
    mockTaskService.getTasks.and.returnValue(of(mockTasks));

    component.ngOnInit();

    expect(component.tasks).toEqual(mockTasks);
    expect(mockTaskService.getTasks).toHaveBeenCalled();
  });

  it('should delete a task', () => {
    const mockTask: Task = { id: 1, text: 'Test Task',day:'day', reminder: false };
    component.tasks = [mockTask];
    mockTaskService.deleteTask.and.returnValue(of(null));

    component.deleteTask(mockTask);

    expect(component.tasks).toEqual([]);
    expect(mockTaskService.deleteTask).toHaveBeenCalledWith(mockTask);
  });

  it('should handle error on fetch tasks', () => {
    spyOn(console, 'error');
    mockTaskService.getTasks.and.returnValue(throwError('Error'));

    component.ngOnInit();

    expect(console.error).toHaveBeenCalledWith('Error fetching tasks:', 'Error');
  });

  // Add more tests for toggleReminder and addTask methods
});
