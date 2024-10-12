import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  ngOnInit(): void {

  }

  @Input() text:string | undefined;// cuz  in typescript the  variable have  to be intiallized
  @Input() color :string | undefined;
  @Output() btnClick= new EventEmitter();

  onClick() {
    this.btnClick.emit();

  }




}
