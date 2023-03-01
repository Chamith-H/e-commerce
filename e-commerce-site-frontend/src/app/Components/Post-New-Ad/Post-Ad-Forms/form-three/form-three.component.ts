import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styleUrls: ['./form-three.component.css']
})
export class FormThreeComponent {

  constructor() {}

  public formData = {
    number: 3,
    posted: 0,
  }

  public data = {
    form3_1: 'X',
    form3_2: 'Y',
    form3_3: 'Z'
  }

  @Output() formThree_Emitter = new EventEmitter;
  @Output() dataThree_Emitter = new EventEmitter;

  public previousForm() {
    this.formData.number--;
    this.formThree_Emitter.emit(this.formData)
  }

  public postAD() {
    this.formData.posted = 1;
    this.formThree_Emitter.emit(this.formData);
    this.dataThree_Emitter.emit(this.data)
  }

  ngOnInit() {
    this.formData.posted = 0;
  }
}
