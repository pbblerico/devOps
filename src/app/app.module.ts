import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductListComponent } from './main-page/product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideMenuComponent } from './main-page/side-menu/side-menu.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductListComponent,
    TopBarComponent,
    SideMenuComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
