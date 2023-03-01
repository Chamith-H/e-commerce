import { Component } from '@angular/core';

@Component({
  selector: 'app-select-brand',
  templateUrl: './select-brand.component.html',
  styleUrls: ['./select-brand.component.css']
})
export class SelectBrandComponent {
  public districts = [
    { id:1, name:'Huawei' },
    { id:2, name:'Apple' },
    { id:3, name:'Lenovo' },
    { id:4, name:'Vivo' },
  ]

  

  public selected_District = [];
}
