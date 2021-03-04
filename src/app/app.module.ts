import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SiteLayoutComponent } from './_layouts/site-layout/site-layout.component';
import { SiteHeaderComponent } from './_layouts/site-header/site-header.component';
import { AppSidebarComponent } from './_layouts/app-sidebar/app-sidebar.component';
import { AppFooterComponent } from './_layouts/app-footer/app-footer.component';
import { AppLayoutComponent } from './_layouts/app-layout/app-layout.component';
import { AppHeaderComponent } from './_layouts/app-header/app-header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    SiteLayoutComponent,
    SiteHeaderComponent,
    AppSidebarComponent,
    AppFooterComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
