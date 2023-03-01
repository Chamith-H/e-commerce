import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/Home/home-page/home-page.component';
import { CategoryComponent } from './Components/Home/category/category.component';
import { ProfileComponent } from './Components/Account/profile/profile.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { FooterComponent } from './Components/Layout/footer/footer.component';
import { ItemsBoxComponent } from './Components/Item-Ads/items-box/items-box.component';
import { ItemsListComponent } from './Components/Item-Ads/items-list/items-list.component';
import { TopBannerComponent } from './Components/Ad-Banners/top-banner/top-banner.component';
import { LeftBannerComponent } from './Components/Ad-Banners/left-banner/left-banner.component';
import { RightBannerComponent } from './Components/Ad-Banners/right-banner/right-banner.component';
import { PostAdPageComponent } from './Components/Post-New-Ad/post-ad-page/post-ad-page.component';
import { FormOneComponent } from './Components/Post-New-Ad/Post-Ad-Forms/form-one/form-one.component';
import { FormTwoComponent } from './Components/Post-New-Ad/Post-Ad-Forms/form-two/form-two.component';
import { FormThreeComponent } from './Components/Post-New-Ad/Post-Ad-Forms/form-three/form-three.component';
import { PostNewComponent } from './Components/Post-Ad/post-new/post-new.component';
import { AccountPopupComponent } from './Components/Account/account-popup/account-popup.component';
import { SignInComponent } from './Components/Account/Sign-Forms/sign-in/sign-in.component';
import { SignUpComponent } from './Components/Account/Sign-Forms/sign-up/sign-up.component';
import { SignUpPageComponent } from './Components/Account/sign-up-page/sign-up-page.component';
import { SiderComponent } from './Components/Layout/sider/sider.component';
import { SelectDistrictComponent } from './Components/Post-Ad/ng-Selections/select-district/select-district.component';
import { SelectTownComponent } from './Components/Post-Ad/ng-Selections/select-town/select-town.component';
import { SelectBrandComponent } from './Components/Post-Ad/ng-Selections/select-brand/select-brand.component';
import { SelectModelComponent } from './Components/Post-Ad/ng-Selections/select-model/select-model.component';
import { PostedAdPageComponent } from './Components/My-Posted-Ads/posted-ad-page/posted-ad-page.component';
import { PostedAdItemEditComponent } from './Components/My-Posted-Ads/posted-ad-item-edit/posted-ad-item-edit.component';
import { CartComponent } from './Components/cart/cart.component';
import { BottomBannerComponent } from './Components/Ad-Banners/bottom-banner/bottom-banner.component';
import { ItemAdsPageComponent } from './Components/Item-Ads/item-ads-page/item-ads-page.component';
import { SelectedItemComponent } from './Components/Item-Ads/selected-item/selected-item.component';
import { ShowSingleItemComponent } from './Components/Item-Ads/show-single-item/show-single-item.component';
import { SimilarItemsComponent } from './Components/Item-Ads/similar-items/similar-items.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CategoryComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    ItemsBoxComponent,
    ItemsListComponent,
    TopBannerComponent,
    LeftBannerComponent,
    RightBannerComponent,
    PostAdPageComponent,
    PostNewComponent,
    AccountPopupComponent,
    SignInComponent,
    SignUpComponent,
    SignUpPageComponent,
    SiderComponent,
    SelectDistrictComponent,
    SelectTownComponent,
    SelectBrandComponent,
    SelectModelComponent,
    PostedAdPageComponent,
    PostedAdItemEditComponent,
    CartComponent,
    BottomBannerComponent,
    ItemAdsPageComponent,
    SelectedItemComponent,
    ShowSingleItemComponent,
    SimilarItemsComponent,
    FormOneComponent,
    FormTwoComponent,
    FormThreeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
