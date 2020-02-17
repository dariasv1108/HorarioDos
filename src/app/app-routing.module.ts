import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./page/home/home.module').then(m => m.HomePageModule) },
  { path: 'estuios', loadChildren: () => import('./page/estuios/estuios.module').then(m => m.EstuiosPageModule)},
  { path: 'horario', loadChildren: () => import('./page/horario/horario.module').then(m => m.HorarioPageModule) },
  { path: 'grupo', loadChildren: () => import('./page/grupo/grupo.module').then(m => m.GrupoPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
