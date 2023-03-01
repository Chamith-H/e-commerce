import { Component } from '@angular/core';

@Component({
  selector: 'app-select-model',
  templateUrl: './select-model.component.html',
  styleUrls: ['./select-model.component.css']
})
export class SelectModelComponent {
  public districts = [
    { id:1, name:'i phone 11' },
    { id:2, name:'i phone SE' },
    { id:3, name:'i phone 12' },
    { id:4, name:'i phone 6' },
    { id:5, name:'i phone 7 plus' },
  ]

  public selected_District = [];
}
