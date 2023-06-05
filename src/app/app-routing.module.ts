import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  {
    component:AboutComponent,
    path:"about"
  },
  {
    component:HomeComponent,
    path:""
  },
  {
    component:MediaComponent,
    path:"media"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
