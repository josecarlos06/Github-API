import { Component } from '@angular/core';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
})
export class VistaComponent{
  
  get result(){
    return this.GithubService.result;
  }
  constructor (private GithubService: GithubService){}
}
