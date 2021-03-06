import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { HomeComponent } from './modules/home/home.component';
const routes: Routes = [
  {
    path: '', component: ContentLayoutComponent,

    children: [
      { path: '', component: HomeComponent },
    ],


  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
