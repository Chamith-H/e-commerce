import { Component } from '@angular/core';

@Component({
  selector: 'app-select-town',
  templateUrl: './select-town.component.html',
  styleUrls: ['./select-town.component.css']
})
export class SelectTownComponent {
  public towns= [
    { id:1, name:'Borella' },
    { id:2, name:'Maradana' },
    { id:3, name:'Moratuwa' },
    { id:4, name:'Kesbewa' },
    { id:5, name:'Mountlevenia' },
    { id:6, name:'Rathmalana' },
    { id:1, name:'Agulana' },
    { id:2, name:'Colombo 11' },
    { id:3, name:'Wellawatta' },
    { id:4, name:'Bambalapitiya' },
    { id:5, name:'Malabe' },
    { id:6, name:'Kotte' },
  ]

  
  public created_Town = [];
  
}
