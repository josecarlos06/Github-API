import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubPageComponent } from './github-page/github-page.component';
import { VistaComponent } from './vista/vista.component';
import { BusquedaComponent } from './busqueda/busqueda.component';



@NgModule({
  declarations: [
    GithubPageComponent,
    VistaComponent,
    BusquedaComponent
  ],
  exports:[
    GithubPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GithubModule { }
