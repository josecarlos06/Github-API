import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { GithubInterface } from '../interface/github.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private serviceUrl :string = 'https://api.github.com/users';

  public result:any= [];
  constructor(private http : HttpClient) { }


  buscarPerfil(query:string){
    this.http.get<GithubInterface>(`${this.serviceUrl}/${query}`).subscribe((res)=>{
      this.result= res
    })
  }
}
