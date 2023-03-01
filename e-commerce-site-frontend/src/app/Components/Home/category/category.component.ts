import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { merge } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {
  public data = [
    {
      name:'Electronics',
      image:'../../../../assets/Category/Electronics.png',
      count:'250 ads'
    },

    {
      name:'Furniture',
      image:'../../../../assets/Category/Furniture.png',
      count:'250 ads'
    },

    {
      name:'Vehicle',
      image:'../../../../assets/Category/Vehicle.png',
      count:'258 ads'
    },

    {
      name:'Property',
      image:'../../../../assets/Category/Property.png',
      count:'258 ads'
    },

    {
      name:'Business',
      image:'../../../../assets/Category/Business.png',
      count:'258 ads'
    },

    {
      name:'Services',
      image:'../../../../assets/Category/Services.png',
      count:'258 ads'
    },

    {
      name:'Animals',
      image:'../../../../assets/Category/Animals.png',
      count:'258 ads'
    },

    {
      name:'Sports',
      image:'../../../../assets/Category/Sports.png',
      count:'258 ads'
    },

    {
      name:'Jobs',
      image:'../../../../assets/Category/Jobs.png',
      count:'258 ads'
    },

    {
      name:'Fashion',
      image:'../../../../assets/Category/Fashions.png',
      count:'258 ads'
    },

    {
      name:'Education',
      image:'../../../../assets/Category/Education.png',
      count:'258 ads'
    },

    {
      name:'Other',
      image:'../../../../assets/Category/Others.png',
      count:'258 ads'
    },

  ]

  constructor(private route:ActivatedRoute, private router:Router) {}

  public showItems(categoryName:any) {
    this.router.navigate(['/show'], {queryParams: {selected : categoryName}, queryParamsHandling:'merge'}) 
  }
}
