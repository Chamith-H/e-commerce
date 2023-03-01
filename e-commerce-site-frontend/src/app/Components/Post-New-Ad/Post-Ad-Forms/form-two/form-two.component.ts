import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.css']
})
export class FormTwoComponent {

  constructor() {}

  public formData = {
    number: 2,
  }

  public data = {
    form2_1: 'A',
    form2_2: 'B',
    form2_3: 'C'
  }

  categories = [
    {name: 'Electronics', selected: false, image: '../../../../../assets/Category/Electronics.png'},
    {name: 'Furniture', selected: false, image: '../../../../../assets/Category/Furniture.png'},
    {name: 'Vehicle', selected: false, image: '../../../../../assets/Category/Vehicle.png'},
    {name: 'Property', selected: false, image: '../../../../../assets/Category/Property.png'},
    {name: 'Business', selected: false, image: '../../../../../assets/Category/Business.png'},
    {name: 'Animals', selected: false, image: '../../../../../assets/Category/Animals.png'},
    {name: 'Sports', selected: false, image: '../../../../../assets/Category/Sports.png'},
    {name: 'Fashion', selected: false, image: '../../../../../assets/Category/Fashions.png'},
    {name: 'Education', selected: false, image: '../../../../../assets/Category/Education.png'},
    {name: 'Other', selected: false, image: '../../../../../assets/Category/Others.png'}
  ]

  subCategories = [
    {name:'', selected:false}
  ]

  show_subCategory = false

  selectCategory(category:any) {
    this.categories.forEach(b => b.selected = false);
    category.selected = true;

    this.show_subCategory = true;
    
    if(category.name == 'Electronics') {

      this.subCategories = [
        {name: 'Mobile Phones', selected: false},
        {name: 'Computers', selected: false},
        {name: 'Televisions', selected: false},
        {name: 'Cameras', selected: false},
        {name: 'Speakers', selected: false},
        {name: 'Fans', selected: false},
        {name: 'Radio', selected: false},
        {name: 'Multiplugs', selected: false},
        {name: 'Irons', selected: false},
      ]
    }

    else if(category.name == 'Furniture') {
      this.subCategories = [
        {name: 'Chairs', selected: false},
        {name: 'Tables', selected: false},
        {name: 'Sofa set', selected: false},
        {name: 'TV Stand', selected: false},
        {name: 'Computer Table', selected: false},
      ]
    }

    else if(category.name == 'Vehicle') {
      this.subCategories = [
        {name: 'Car', selected: false},
        {name: 'Van', selected: false},
        {name: 'Lorry', selected: false},
        {name: 'Bus', selected: false},
      ]
    }
  }

  selectSubCategory(subCategory:any) {
    this.subCategories.forEach(b => b.selected = false);
    subCategory.selected = true;
  }

  @Output() formTwo_Emitter = new EventEmitter;
  @Output() dataTwo_Emitter = new EventEmitter;

  public nextForm() {
    this.formData.number++
    this.formTwo_Emitter.emit(this.formData)
    this.dataTwo_Emitter.emit(this.data)
  }

  public previousForm() {
    this.formData.number--;
    this.formTwo_Emitter.emit(this.formData)
  }
}
