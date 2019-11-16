import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondpageComponent } from './SecondPage/secondpage.component';

const routes: Routes = [
  { path: 'secondpage', component: SecondpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
