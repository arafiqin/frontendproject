import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { TypeComponent } from './type/type.component';
import { HttpClientModule } from'@angular/common/http';
import { AppService } from'./app.service';
import { RecipesComponent } from './recipes/recipes.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    TypeComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
