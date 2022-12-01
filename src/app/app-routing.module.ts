import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {TypeComponent} from './type/type.component';
import {RecipesComponent} from './recipes/recipes.component';

const routes: Routes = [{path: 'home' , component:HomeComponent},
{path: 'product' , component:ProductComponent},
{path: 'type' , component:TypeComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
