import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { GridModule, ExcelModule, PDFModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';
import { CategoriesService } from './kendo-grid/kendo-grid.service';

@NgModule({
  
  declarations: [
    AppComponent,
    KendoGridComponent
  ],
  imports: [
      BrowserModule, BrowserAnimationsModule, GridModule, HttpModule, ExcelModule, PDFModule
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
