import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent {

  constructor() {}

  public formData = {
    number: 1,
  }

  public data = {
    purpose: 'Selling',
    district: 'Colombo',
    town: 'Maradana'
  }

  @Output() formOne_Emitter = new EventEmitter;
  @Output() dataOne_Emitter = new EventEmitter

  buttons = [
    {name: 'Sell an item or property', icon:"bi bi-cash-coin", selected: false},
    {name: 'Sell a service', icon:"bi bi-vector-pen", selected: false},
    {name: 'Post a job vacancy', icon:"bi bi-person-check", selected: false}
  ];

  
  selectButton(button:any) {
    this.buttons.forEach(b => b.selected = false);
    button.selected = true;
  }

  public nextForm() {
    this.formData.number++;
    this.formOne_Emitter.emit(this.formData)
    this.dataOne_Emitter.emit(this.data)
  }
}
