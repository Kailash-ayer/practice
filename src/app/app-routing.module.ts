import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren: ()=>import('./pages/home/home.module').then(m =>m.HomeModule)
  },
  {
    path:'register',
    loadChildren: ()=>import('./pages/register/register.module').then(m =>m.RegisterModule)
  },
  {
    path:'blog',
    loadChildren: ()=>import('./pages/blog/blog.module').then(m =>m.BlogModule)
  },
  {
    path:'**',
    loadChildren: ()=>import('./pages/page-not-found/page-not-found.module').then(m =>m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
