import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { MwHeaderComponent } from './layouts/mw-header/mw-header.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    MwHeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [
    MwHeaderComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
