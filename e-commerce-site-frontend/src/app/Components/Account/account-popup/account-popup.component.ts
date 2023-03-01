import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-popup',
  templateUrl: './account-popup.component.html',
  styleUrls: ['./account-popup.component.css']
})


export class AccountPopupComponent {

  constructor(private route: ActivatedRoute) {}

  public showUser = false;
  public username :any;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = JSON.parse(params['user'])

      if (this.username != "") {
        this.showUser = !this.showUser
      }
    })
  }

}
