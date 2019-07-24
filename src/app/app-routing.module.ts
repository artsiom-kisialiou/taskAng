import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppTabeComponent } from './app-tabe/app-tabe.component';
import { AppStartPageComponent } from './app-start-page/app-start-page.component';
import { AppFlowComponent } from './app-flow/app-flow.component';



const routes: Routes = [
  {path: '', component: AppStartPageComponent},
  {path: 'dashboard', component: AppTabeComponent},
  {path: 'flow', component: AppFlowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
