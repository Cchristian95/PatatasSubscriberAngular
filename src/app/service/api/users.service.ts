import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelUser } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'https://lab.app.invertebrado.co/api/';
  token: String = '';
  constructor( private http: HttpClient) {
    
    
  }

  //Listar (Lo que se refleja en la tabla)
  getUser(): Observable<ModelUser[]> {
    return this.http.get<ModelUser[]>(`${this.url}/list-subscribers`);
  }
  //Editar (Refleja info autocompleta input)
  getUserById(id: string): Observable<ModelUser> {
    return this.http.get<ModelUser>(`${this.url}/list-subscribers/${id}`);
  }


  createUser(user: ModelUser): Observable<ModelUser> {
    return this.http.post<ModelUser>(`${this.url}/create-subcriber`, user, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  deleteUser(id: String): Observable<any> {
    return this.http.delete(`${this.url}/list-subscriber/${id}`, {
      headers: new HttpHeaders({
        // 'Authorization': `Bearer ${this.token}`
      })
    });
  }

  updateUser(usuario: ModelUser): Observable<ModelUser> {
    return this.http.put<ModelUser>(`${this.url}/subscriber/${usuario.id}`, usuario, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
}
