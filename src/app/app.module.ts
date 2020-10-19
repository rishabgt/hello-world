import { SiblingSecond } from './siblings/sibling2.component';
import { SiblingsService } from './siblings.service';
import { TableDataComponent } from './table/tableData.component';
import { TableHeadComponent } from './table/tableHead.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { TableComponent } from './table/table.component';
import { SiblingsComponent } from './siblings/siblings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComponentProductComponent } from './component-product/component-product.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    TableComponent,
    TableHeadComponent,
    TableDataComponent,
    SiblingsComponent,
    SiblingSecond,
    NavbarComponent,
    ComponentProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SiblingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
