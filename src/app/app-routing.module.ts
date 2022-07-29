import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// aqui declaramos las rutas
const routes: Routes = [
   {
    path: '', //TODO: http://localhost:4200/ -> la raíz
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
