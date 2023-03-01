import { Component,  OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})

export class PostNewComponent {

  counter = 0;

  show_FormOne = true
  show_FormTwo = false
  show_FormThree = false

  navigateNext() {
    this.counter++;

    if(this.counter == 1) {
      this.show_FormOne = false;
      this.show_FormTwo = true;
    }

    if(this.counter == 2) {
      this.show_FormTwo = false;
      this.show_FormThree = true;
    }

    if(this.counter >= 2) {
      this.counter = 2;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }

  navigateBack() {
    this.counter--;

    if(this.counter == 1) {
      this.show_FormThree = false;
      this.show_FormTwo = true;
    }
    
    if(this.counter == 0) {
      this.show_FormTwo = false;
      this.show_FormOne = true;
    }

    if(this.counter <= 0) {
      this.counter = 0;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }

  postAd() {

  }

  ngOnInit() {
    
  }
}
