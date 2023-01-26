import { Component, ElementRef, ViewChild } from '@angular/core';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent{
  @ViewChild('txtbuscar') txtbuscar!:ElementRef<HTMLInputElement>;

  constructor(private GithubService: GithubService){}
  buscar(){
    const valor = this.txtbuscar.nativeElement.value;
    if(valor.trim() === '') {
      return;
    }
    this.GithubService.buscarPerfil(valor);
    this.txtbuscar.nativeElement.value = "";
  }
}
