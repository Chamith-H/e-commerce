import { Component } from '@angular/core';


@Component({
  selector: 'app-post-ad-page',
  templateUrl: './post-ad-page.component.html',
  styleUrls: ['./post-ad-page.component.css']
})
export class PostAdPageComponent {

  public show = {
    form_1: true,
    form_2: false,
    form_3: false
  }

  public formData = {
    purpose: '',
    district: '',
    town: ''
  }

  public show_postedPopup = false;

  public handdleForm(form:any) {

    if (form.number == 1 ) {
      this.show.form_1 = true;
      this.show.form_2 = false;
      this.show.form_3 = false;
    }

    else if (form.number == 2 ) {
      this.show.form_1 = false;
      this.show.form_2 = true;
      this.show.form_3 = false;
    }

    else if (form.number == 3 ) {
      this.show.form_1 = false;
      this.show.form_2 = false;
      this.show.form_3 = true;

      if (form.posted == 1) {
        // this.show_postedPopup = true;
        alert("Posted Successfully")
        console.log(this.formData)
      }
    }
  }

  public collectData(data:any) {
    Object.assign(this.formData, data)
  }
}
