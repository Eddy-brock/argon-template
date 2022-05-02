import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { enterpriseI } from 'src/app/models/enterprise.interface';
import { EnterpriseService } from '../enterprise.service';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.scss']
})
export class EditarEmpresaComponent implements OnInit {

  idEnterprise: number=0;
  editRegister: FormGroup;

  constructor(private editarapi: EnterpriseService,
    private route: ActivatedRoute,
    private redirect: Router,
    private formBuilder: FormBuilder) { }

     datosRegister: enterpriseI;
     editarFor = new FormGroup({
      fldname: new FormControl(''),
      fldlocality: new FormControl(''),
      fldstreet: new FormControl(''),
      fldnumber: new FormControl(''),
      fldpostCode: new FormControl(''),
      fldphoneNumber: new FormControl(''),
      fldemail: new FormControl(''),
      fldpageWeb: new FormControl(''),
      idMunicipality: new FormControl(''),
      idState: new FormControl('')

    });

  ngOnInit(): void {
    console.log(localStorage.getItem('token'));
    let idEnterprise = this.route.snapshot.paramMap.get('id');
    this.editarapi.GetIdEnter(idEnterprise).subscribe(data =>{
      this.datosRegister = data[0];
      console.log(this.datosRegister);
      this.editarFor.setValue({
        'fldname': this.datosRegister.fldname,
        'fldlocality': this.datosRegister.fldlocality,
        'fldstreet': this.datosRegister.fldstreet,
        'fldnumber': this.datosRegister.fldnumber,
        'fldpostCode': this.datosRegister.fldpostCode,
        'fldphoneNumber': this.datosRegister.fldphoneNumber,
        'fldemail': this.datosRegister.fldemail,
        'fldpageWeb': this.datosRegister.fldpageWeb,
        'idMunicipality': this.datosRegister.idMunicipality,
        'idState': this.datosRegister.idState,
        'idEnterprise': idEnterprise,
        
      });
      console.log(this.editRegister.value);
  
    })
   
  }
  postForm(form:enterpriseI){
    this.editarapi.putEnterrpise(this.datosRegister.idEnterprise,form).subscribe(data => {
      console.log(data);
    });
    console.log(form);

  }

}
