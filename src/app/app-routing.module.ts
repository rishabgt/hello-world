import { TableComponent } from './table/table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ComponentProductComponent } from './component-product/component-product.component';

const routes: Routes = [
  {path:'products',component:ComponentProductComponent},
  {path:'cart',component:CartComponent},
  {path:'crud',component:TableComponent},
  {path:'admin',loadChildren:()=>import('./admin/admin.module')
  .then(mod=>mod.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
