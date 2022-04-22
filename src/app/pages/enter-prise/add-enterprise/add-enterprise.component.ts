import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnterprisePostI } from 'src/app/models/enterprisePost.interface';
import { MunicipyI } from 'src/app/models/municipy.interface';
import { EnterpriseService } from '../enterprise.service';

@Component({
  selector: 'app-add-enterprise',
  templateUrl: './add-enterprise.component.html',
  styleUrls: ['./add-enterprise.component.scss']
})
export class AddEnterpriseComponent implements OnInit {

  newRegister: FormGroup;
idEnterprise: number;
municipy: MunicipyI;
error: string[]=[];
  constructor( private activatRoute: ActivatedRoute,
               private formBuilder: FormBuilder,
               private redirect: Router,
               private enterpriseApi: EnterpriseService) { 
                 //FormGroup
                 this.newRegister = formBuilder.group({
                  idState: ['',[Validators.required]],
                  idMunicipality: ['',[Validators.required]],
                  fldname: ['',[Validators.required]],
                  fldlocality: ['',[Validators.required]],
                  fldstreet: ['',[Validators.required]],
                  fldnumber: ['',[Validators.required]],
                  fldpostCode: ['',[Validators.required]],
                  fldphoneNumber: ['',[Validators.required]],
                  fldemail: ['',[Validators.required]],
                  fldpageWeb:['',[Validators.required]]
                 });
                 this.idEnterprise = +this.activatRoute.snapshot.paramMap.get('idEnterprise')!;
               }

  ngOnInit(): void {
    if(localStorage.getItem('token')== null){
      this.redirect.navigate(['login']);
    }
  }

  saveEnterprise(){
    console.log('error')
    this.error = []
    if(this.newRegister.invalid){
      alert('error en el formulario')
      return;
    }
    const register : EnterprisePostI = {
      idState: String(this.newRegister.get('idState')?.value),
                  idMunicipality:String(this.newRegister.get('idMunicipality')?.value) ,
                  fldname: String(this.newRegister.get('fldname')?.value),
                  fldlocality: String(this.newRegister.get('fldlocality')?.value),
                  fldstreet: String(this.newRegister.get('fldstreet')?.value),
                  fldnumber:String(this.newRegister.get('fldnumber')?.value),
                  fldpostCode: String(this.newRegister.get('fldpostCode')?.value),
                  fldphoneNumber: String(this.newRegister.get('fldphoneNumber')?.value),
                  fldemail: String(this.newRegister.get('fldemail')?.value),
                  fldpageWeb:String(this.newRegister.get('fldpageWeb')?.value),
                  idEnterprise: this.idEnterprise,
    };
    if(this.error.length == 0){
      this.enterpriseApi.SendRequest(register).subscribe({
        next: data => {
          alert("Empresa agregada con exito");
          window.location.href = '#/enter-prise';
        },
        error: error => {
          let errorMessage = error.status;
          if(errorMessage != 200){
            alert("session cerrada por seguridad")
            window.location.href = '#/login';
          }
        }
      });
    }else{
      console.log('Error')
    }
  }

}
