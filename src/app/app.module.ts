import { TableDataComponent } from './table/tableData.component';
import { TableHeadComponent } from './table/tableHead.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { TableComponent } from './table/table.component';
import { AddingdataComponent } from './addingdata/addingdata.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    TableComponent,
    TableHeadComponent,
    TableDataComponent,
    AddingdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
