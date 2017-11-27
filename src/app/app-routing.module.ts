import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'autocomplete',
    loadChildren: './autocomplete/autocomplete.module#AutocompleteModule',
  },
  {
    path: 'rxjs',
    loadChildren: './rxjs-demo/rxjs-demo.module#RxjsDemoModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
