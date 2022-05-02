import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterI } from 'src/app/models/register';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-edit-register',
  templateUrl: './edit-register.component.html',
  styleUrls: ['./edit-register.component.scss']
})
export class EditRegisterComponent implements OnInit {

  registers: RegisterI[];
  idUser: number=0;
  editRegister: FormGroup;

  constructor(private editarapi:RegisterService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  datosRegister: RegisterI;
  editarFor = new FormGroup({
  idUserType: new FormControl(''),
  idUserStatus: new FormControl(''),
  fldname: new FormControl(''),
  fldlastName: new FormControl(''),
  fldfirstName: new FormControl(''),
  fldpassword: new FormControl(''),
  fldemailAccount: new FormControl('')
  });
  
  ngOnInit(): void {
    console.log(localStorage.getItem('token'));
    let idUser = this.route.snapshot.paramMap.get('id');
    this.editarapi.getId(idUser).subscribe(data =>{
      this.datosRegister = data[0];
      console.log(this.datosRegister);
      this.editarFor.setValue({
        'idUserType': this.datosRegister.idUserType,
        'idUserStatus': this.datosRegister.idUserStatus ,
        'fldname': this.datosRegister.fldname,
        'fldlastName': this.datosRegister.fldlastName,
        'fldfirstName': this.datosRegister.fldfirstName,
        'fldpassword': this.datosRegister.fldpassword,
        'fldemailAccount':  this.datosRegister.fldemailAccount,
        'idUser' : idUser
      });
      console.log(this.editRegister.value);
    });

  }
  postForm(form:RegisterI){
    this.editarapi.putEnterrpise(this.datosRegister.idUser, form).subscribe(data=> {
      console.log(data);
    });
    console.log(form);
  }

}
