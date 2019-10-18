import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SubMainComponent } from './sub-main/sub-main.component';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: SubMainComponent },
    { path: 'main', component: MainComponent },
  ])],
  exports: [RouterModule]
})

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
