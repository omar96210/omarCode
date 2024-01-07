import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ProjectComponent } from './Component/project/project.component';
import { ContuctUsComponent } from './Component/contuct-us/contuct-us.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'contuct-us', component: ContuctUsComponent },

  // { path: '**', component: PageNotFoundComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
