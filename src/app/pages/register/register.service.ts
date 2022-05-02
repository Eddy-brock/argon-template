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

    sendRequest(newRegister:RegisterI): Observable<RegisterI>{
        console.log("json" + JSON.stringify(newRegister));
        let urlApi = api_url+'api/Usuario';
        const headers = new HttpHeaders().set('Authorization', `Bearer ${ localStorage.getItem('token')}`);
        console.log(headers);
        return this.http.post<any>(urlApi, newRegister, {headers:headers});
    }
        getAllRegister():Observable<RegisterI[]>{
        let urlApi = api_url+'api/Usuario/Lista';//id???
        const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
        .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET')
    .append('Access-Control-Allow-Origin', '*');
        console.log(headers);
        return this.http.get<RegisterI[]>(urlApi, {headers:headers});
    }
    getId(id):Observable<RegisterI>{
        let urlApi = api_url+'api/Usuario/Lista/'+id;
        const headers = new HttpHeaders().set('Authorization', `Bearer ${ localStorage.getItem('token')}`);
        console.log(headers);
        return this.http.get<RegisterI>(urlApi,{headers:this.headers});
    }
    UpdateEnterprise(id:number, enter:usuarioI): Observable<usuarioI[]>{
        let urlApi = api_url+'api/Usuario/'+id;
        const headers = new HttpHeaders().set('Autorization', `Bearer ${ localStorage.getItem('token')}`);
        console.log(headers)
        return this.http.put<any>(urlApi, enter, {headers:headers});
    }

    putEnterrpise(id,form:RegisterI):Observable<RegisterI>{
        let direccion = this.url_service+id;
        const headers = new HttpHeaders().set('Autorization', `Bearer ${ localStorage.getItem('token')}`);
        console.log(headers)
        return this.http.put<RegisterI>(direccion, form,{headers:headers});
    }

    DeleteEnterprise(id:number){
        let direccion = api_url+'api/Usuario/'+id;
        return this.http.delete(direccion,{headers:this.headers});
    }
}