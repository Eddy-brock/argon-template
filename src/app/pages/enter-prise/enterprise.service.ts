import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { enterpriseI } from 'src/app/models/enterprise.interface';
import { api_url } from 'src/app/global-constants';
import { EnterprisePostI } from 'src/app/models/enterprisePost.interface';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
              //
  constructor( private http: HttpClient) { }

    GetAllEnterprise(): Observable<enterpriseI[]>{
      let urlApi = api_url+'api/EnterPrise/Lista';
        const headers = new HttpHeaders().set('Authorization', `Bearer ${ localStorage.getItem('token')}`);
        console.log(headers);
      return this.http.get<enterpriseI[]>(urlApi,{headers: headers} );
    }

    GetIdEnter(id:number):Observable<enterpriseI>{
      const headers = new HttpHeaders().set('Authorization', `Bearer ${ localStorage.getItem('token')}`);
      console.log(headers);
      let urlApi = api_url+'api/EnterPrise/'+id;
      return this.http.get<any>(urlApi,{headers:headers});
    }

    

    SendRequest(newEnterprise : EnterprisePostI): Observable<EnterprisePostI>{
      console.log("json:"+ JSON.stringify(newEnterprise));
      let urlApi = api_url + 'api/EnterPrise/Register';
      const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
      console.log(headers);
      return this.http.post<any>(urlApi, newEnterprise, {headers:headers});
    }

    UpdateEnterprise( id:number, enterprise: enterpriseI ): Observable<enterpriseI[]>
    {
        let urlApi = api_url + 'api/EnterPrise/'+id;
        const headers = new HttpHeaders().set('Authorization', `Bearer ${ localStorage.getItem('token')}`);
        console.log(headers);
        return this.http.put<any>(urlApi, enterprise,{headers:headers});
    }

    //DeleteEnterprise(id)

}
