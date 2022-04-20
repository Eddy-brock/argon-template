import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { logI } from 'src/app/models/log.interface';
import { LoginI } from 'src/app/models/login.interface';
import { ResultI } from 'src/app/models/result.interface';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  datos: LoginI[]=[];

  loginForm = new FormGroup({
    fldname : new FormControl('', Validators.required),
    fldpassword : new FormControl('', Validators.required)
  })
  constructor(private loginservice: LoginService, private router: Router) {}

  errorStatus:boolean=false;
  errorMsj:any="";

  ngOnInit():void {
    localStorage.clear();
    this.chechlocalstorage();
  }
  ngOnDestroy() {
  }
  
  chechlocalstorage(){ //metodo verificar token
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
  }
  login(newLogin:logI){
    this.loginservice.sendRequest(newLogin).subscribe( data =>{
     
      let dataResponse:ResultI = data;
      if(dataResponse.ok = true){
        localStorage.setItem('token', dataResponse.token);
        localStorage.getItem('idUsuario');
        alert("bienvenido");
        this.router.navigate(['dashboard']);
        
      }else{
        this.errorStatus=true;
        this.errorMsj = dataResponse.token.name;
      }
      console.log(data)
      
      
    });
  }

}
