import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterI } from 'src/app/models/register';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-add-register',
  templateUrl: './add-register.component.html',
  styleUrls: ['./add-register.component.scss']
})
export class AddRegisterComponent implements OnInit {

  newRegister: FormGroup;
  idUser: number;
  register: RegisterI[];
  errors: string[]=[];

  constructor( private activeroute: ActivatedRoute, private formBuilder: FormBuilder,
     private redirect: Router, private apiusuarios: RegisterService) {
       this.newRegister = formBuilder.group({
        idUserType : ['',[Validators.required]],
        idUserStatus : ['',[Validators.required]],
        fldname : ['',[Validators.required]],
        fldlastName : ['',[Validators.required]],
        fldfirstName : ['',[Validators.required]],
        fldpassword : ['',[Validators.required]],
        fldemailAccount : ['',[Validators.required]]
       });
       this.idUser = +this.activeroute.snapshot.paramMap.get('idUser')!;
      }

  ngOnInit(): void {
    if (localStorage.getItem('token')== null) {
      this.redirect.navigate(['login']);
    }
  }

  saveRegister(){
    this.errors = []
    if(this.newRegister.invalid){
      alert('debes llenar bien el formulario')
      this.errors.push('debes llenar bien el formulario');
      return;
    }
    const registro : RegisterI = {
      idUserType: String(this.newRegister.get('idUserType').value),
      idUserStatus: String( this.newRegister.get('idUserStatus').value),
      fldname: String(this.newRegister.get('fldname').value),
      fldlastName: String(this.newRegister.get('fldlastName').value),
      fldfirstName: String(this.newRegister.get('fldfirstName').value),
      fldpassword: String(this.newRegister.get('fldpassword').value),
      fldemailAccount: String(this.newRegister.get('fldemailAccount').value),
      idUser:  this.idUser
    };
    if(this.errors.length ==0)
    {
      this.apiusuarios.sendRequest(registro).subscribe(
        {
          next: data => {
            alert("agregado con exito");
            window.location.href = '#/tables';
          },
          error: error => {
            let errorMessage = error.status;
            if(errorMessage != 200){
              alert("session cerrada por seguridad");
              window.location.href = '#/login';
            }
          }
        }
      );
    }else{
      console.log('error');
    }
  }

}
