import { Injectable } from '@angular/core';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://lab.app.invertebrado.co/api/"
  
  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let address =   this.url + "login"
    return this.http.post<ResponseI>(address,form);
  }
}
