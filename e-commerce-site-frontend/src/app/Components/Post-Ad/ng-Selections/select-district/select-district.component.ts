import { Component } from '@angular/core';

@Component({
  selector: 'app-select-district',
  templateUrl: './select-district.component.html',
  styleUrls: ['./select-district.component.css']
})
export class SelectDistrictComponent {
  public districts = [
    { id:1, name:'Colombo' },
    { id:2, name:'Gampaha' },
    { id:3, name:'Kaluthara' },
    { id:4, name:'Galle' },
    { id:5, name:'Mathara' },
    { id:6, name:'Hambanthota' },
    { id:1, name:'Mathale' },
    { id:2, name:'Anuradapura' },
    { id:3, name:'Polonnaruwa' },
    { id:4, name:'Badulla' },
    { id:5, name:'Nuwaraeliya' },
    { id:6, name:'Jafna' },
  ]

  public selected_District = [];
}
