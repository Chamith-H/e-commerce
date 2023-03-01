import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent {
  constructor(private route: ActivatedRoute) {}

  public selectedData: any;

  public clickOn = {
    Click_name: 'Phone number',
    Click_detail: 'Click to show phone number',
  }

  public showPhone() {
    this.clickOn.Click_name= 'Call';
    this.clickOn.Click_detail= '0775145320'
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedData = JSON.parse(params['selected'])
    })
  }
}
