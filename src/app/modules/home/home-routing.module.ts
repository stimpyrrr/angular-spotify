import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';

const routes: Routes = [
  {
    path: '', //TODO:si el path aqui fuera 'dashboard' y en app-routing.module.ts el path fuera 'home' la ruta sería http://localhost:4200/home/dashboard
              // Se pueden agregar prefijos como prefijos/:username/:other
    component: HomePagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
