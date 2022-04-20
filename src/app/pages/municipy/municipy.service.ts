import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { api_url } from 'src/app/global-constants';
import { MunicipyI } from 'src/app/models/municipy.interface';

@Injectable({
  providedIn: 'root'
})
export class MunicipyService {

  constructor(private http: HttpClient) { }

  
  GetAllEnterprise(): Observable<MunicipyI[]>{
    let urlApi = api_url+'api/EnterPrise/Municipality';
      const headers = new HttpHeaders().set('Authorization', `Bearer ${ localStorage.getItem('token')}`);
      console.log(headers);
    return this.http.get<MunicipyI[]>(urlApi,{headers: headers} );
  }
}
