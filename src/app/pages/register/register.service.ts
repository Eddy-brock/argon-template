import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { api_url } from "src/app/global-constants";
import { RegisterI } from "src/app/models/register";
import { Observable } from "rxjs";
import { usuarioI } from "src/app/models/usuario.interface";
import { usuariosI } from "src/app/models/usuarios.interface";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url_service = api_url + 'api/Usuario/';
    private headers = new HttpHeaders().set('Authorization', `Bearer ${ localStorage.getItem('token')}`);
    constructor(private http: HttpClient){}

    sendRequest(newRegister:usuarioI): Observable<usuarioI>{
        console.log("json" + JSON.stringify(newRegister));
        let urlApi = api_url+'api/Usuario';
        const headers = new HttpHeaders().set('Authorization', `Bearer ${ localStorage.getItem('token')}`);
        console.log(headers);
        return this.http.post<any>(urlApi, newRegister, {headers:headers});
    }
        getAllRegister():Observable<usuariosI[]>{
        let urlApi = api_url+'api/Usuario/Lista';//id???
        const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
        .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET')
    .append('Access-Control-Allow-Origin', '*');
        console.log(headers);
        return this.http.get<usuariosI[]>(urlApi, {headers:headers});
    }
    getId(id:number):Observable<usuarioI>{
        let urlApi = api_url+'api/Usuario/Lista/'+id;
        return this.http.get<usuarioI>(urlApi,{headers:this.headers});
    }
    UpdateEnterprise(id:number, enter:usuarioI): Observable<usuarioI[]>{
        let urlApi = api_url+'api/Usuario/'+id;
        const headers = new HttpHeaders().set('Autorization', `Bearer ${ localStorage.getItem('token')}`);
        console.log(headers)
        return this.http.put<any>(urlApi, enter, {headers:headers});
    }

    putEnterrpise(form:usuarioI):Observable<usuarioI>{
        let direccion = this.url_service;
        const headers = new HttpHeaders().set('Autorization', `Bearer ${ localStorage.getItem('token')}`);
        console.log(headers)
        return this.http.put<usuarioI>(direccion, form,{headers:headers});
    }

    /*DeleteEnterprise(id:number){
        return this.http.delete(id,{headers:this.headers});
    }*/
}