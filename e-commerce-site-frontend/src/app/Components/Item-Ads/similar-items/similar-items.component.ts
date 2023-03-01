import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-similar-items',
  templateUrl: './similar-items.component.html',
  styleUrls: ['./similar-items.component.css']
})
export class SimilarItemsComponent {
  public similar_itemName = ""

  public data = [

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Cultus/Esteem',
      item_price:'Rs. 45,000,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/2020_Suzuki_Ciaz_RS.jpg/200px-2020_Suzuki_Ciaz_RS.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Aerio/Liana',
      item_price:'Rs. 34,000,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Suzuki_LANDY_G_2WD_%286BA-MZRA90C-LBGE%29.jpg/200px-Suzuki_LANDY_G_2WD_%286BA-MZRA90C-LBGE%29.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto (Europe)',
      item_price:'Rs. 65,700,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/2015_Suzuki_Alto_Lapin.jpg/199px-2015_Suzuki_Alto_Lapin.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki - Swace',
      item_price:'Rs. 45,000,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Suzuki_Spacia_BASE_XF_2WD_%285BD-MK33V-ZGXE%29_front.jpg/200px-Suzuki_Spacia_BASE_XF_2WD_%285BD-MK33V-ZGXE%29_front.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'',
    },

  ]

  constructor(private route: ActivatedRoute, private router:Router) {}

  stringify = (obj: any) => JSON.stringify(obj);

  public viewAd(selected:any) {

    this.router.navigate(['show/selected'], {queryParams: {selected : this.stringify(selected)}, queryParamsHandling:'merge'}) 

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.similar_itemName = JSON.parse(params['selected']).item_name 

      // to do........
      // pass this.similar_itemName to back end
      // get response data(above request) | 4 random data in database
      // asign it -> data[]
    })
  }
}
