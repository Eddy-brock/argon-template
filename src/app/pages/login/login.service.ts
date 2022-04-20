import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api_url } from 'src/app/global-constants';
import { logI } from 'src/app/models/log.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResultI } from 'src/app/models/result.interface';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient ) { }

  sendRequest(newLogin: logI): Observable<ResultI>{
   
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    console.log(headers);
    let urlApi = api_url+'api/Usuario/Login';
    return this.http.post<ResultI>(urlApi, newLogin, {headers});
  }

}
