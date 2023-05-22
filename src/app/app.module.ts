import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ImsChartThemeModule } from 'imsChartTheme';

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    CommonModule ,
    BrowserModule,
    AppRoutingModule,
    ImsChartThemeModule,
    

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
