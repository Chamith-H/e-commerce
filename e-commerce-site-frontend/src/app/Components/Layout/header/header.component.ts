import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private route:ActivatedRoute, private router:Router) {}

  show_side = false;
  show_Account = false;

  All_ads = "Show all"

  public username:any


  show_SideBar() {
    this.show_side = !this.show_side
  }

  show_AccountPopup(){
    this.show_Account = !this.show_Account
  }

  changeLanguage() {
    
  }

  goHome() {
    this.router.navigate(['/'], {queryParamsHandling:''})
  }

  postAd() {

    this.route.queryParams.subscribe(params => {
      this.username = (params['user'])
    })  

    if (this.username != null) {
      this.router.navigate(['/post-new'], {queryParamsHandling:'merge'})
    }

    else {
      alert("Please Login")
    }
  }
}
