
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  getCurrentUser(): any {
    throw new Error('Method not implemented.');
  }


  constructor(private _http: HttpClient) { }
  getUserList():Observable<User[]>{
      return this._http.get<User[]>('https://localhost:7121/api/User')
  }
  getUserId(id: number):Observable<User>{
    return this._http.get<User>(`https://localhost:7121/api/User/${id}`)
  }

  addUser(user:User){
    return this._http.post('https://localhost:7121/api/User', user)
  }

  deleteUser(id: number){
    return this._http.delete(`https://localhost:7121/api/User/${id}`)
  }

  updateUser(id: number,user:User){
    return this._http.put(`https://localhost:7121/api/User/${id}`,user)
  }

}
