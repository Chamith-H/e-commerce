import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpPageComponent } from './Components/Account/sign-up-page/sign-up-page.component';
import { CartComponent } from './Components/cart/cart.component';
import { HomePageComponent } from './Components/Home/home-page/home-page.component';
import { ItemAdsPageComponent } from './Components/Item-Ads/item-ads-page/item-ads-page.component';
import { ItemsBoxComponent } from './Components/Item-Ads/items-box/items-box.component';
import { PostedAdPageComponent } from './Components/My-Posted-Ads/posted-ad-page/posted-ad-page.component';
import { ShowSingleItemComponent } from './Components/Item-Ads/show-single-item/show-single-item.component';
import { PostAdPageComponent } from './Components/Post-New-Ad/post-ad-page/post-ad-page.component';
import { FormOneComponent } from './Components/Post-New-Ad/Post-Ad-Forms/form-one/form-one.component';
import { FormTwoComponent } from './Components/Post-New-Ad/Post-Ad-Forms/form-two/form-two.component';
import { FormThreeComponent } from './Components/Post-New-Ad/Post-Ad-Forms/form-three/form-three.component';

const routes: Routes = [
  { path: '', component:HomePageComponent,},

  { 
    path: 'show', 
    component: ItemAdsPageComponent,
    children: [
      {
        path:'',
        component:ItemsBoxComponent
      },

      {
        path:'selected', 
        component:ShowSingleItemComponent
      },
    ]
  },

  {
    path: 'post-new',
    component: PostAdPageComponent,
  },

  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'my-ads', component: PostedAdPageComponent },
  { path: 'my-cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
