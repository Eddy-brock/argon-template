import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { enterpriseI } from 'src/app/models/enterprise.interface';
import { EnterpriseService } from '../enterprise.service';

@Component({
  selector: 'app-edit-enterprise',
  templateUrl: './edit-enterprise.component.html',
  styleUrls: ['./edit-enterprise.component.scss']
})
export class EditEnterpriseComponent implements OnInit {
  enterprises:enterpriseI[];
  idEnterprise:number=0;
  idState: number;
  idMunicipality:number;
  action:string='Editar';
  newDate: FormGroup;
  private enterprise:enterpriseI|undefined;
  erorrs: string[]=[];
  isLoading=true;
  constructor(private editarService: EnterpriseService, private route: ActivatedRoute,
              private redirect: Router, private formBuilder: FormBuilder) {
                this.newDate = formBuilder.group({
                  fldname : ['',[Validators.required]],
                  fldlocality : ['',[Validators.required]],
                  fldstreet : ['',[Validators.required]],
                  fldnumber : ['',[Validators.required]],
                  fldpostCode : ['',[Validators.required]],
                  fldphoneNumber : ['',[Validators.required]],
                  fldemail : ['',[Validators.required]],
                  fldpageWeb : ['',[Validators.required]],
                  
                 
                });
                this.idEnterprise= +this.route.snapshot.paramMap.get('id')!;
                this.idState= +this.route.snapshot.paramMap.get('idState')!;
                this.idMunicipality= +this.route.snapshot.paramMap.get('idMunicipality')!;
               }

  ngOnInit(): void {
    if (localStorage.getItem('token')== null) {
      this.redirect.navigate(['login']);
    }
    this.isEdit();
  }

  private isEdit(){
    if(this.idEnterprise >0)
    {
      this.action = 'Editar'
      this.editarService.GetIdEnter(this.idEnterprise).subscribe((resp:enterpriseI)=>
      {
        this.enterprise = resp;
        
        this.newDate.patchValue({
          fldname : resp.fldname,
          fldlocality: resp.fldlocality,
          fldstreet: resp.fldstreet,
          fldnumber: resp.fldnumber,
          fldpostCode: resp.fldpostCode,
          fldphoneNumber: resp.fldphoneNumber,
          fldemail: resp.fldemail,
          fldpageWeb: resp.fldpageWeb,
          
         
        });
        this.isLoading = false;
      });
    }
  }
  EditEnterprise(){
    
    this.erorrs = []
    if (this.newDate.invalid){
      alert('debes llenar bien el formulario')
      this.erorrs.push('debes llenar bien el formulario');
      return;
    }
    const edita:enterpriseI =
    {
      idEnterprise: this.enterprise.idEnterprise,
      fldname : this.newDate.get('fldname').value,
      fldlocality : this.newDate.get('fldlocality').value,
      fldstreet : this.newDate.get('fldstreet').value,
      fldnumber : this.newDate.get('fldnumber').value,
      fldpostCode : this.newDate.get('fldpostCode').value,
      fldphoneNumber : this.newDate.get('fldphoneNumber').value,
      fldemail : this.newDate.get('fldemail').value,
      fldpageWeb : this.newDate.get('fldpageWeb').value,
      idState : this.enterprise.idState,
      idMunicipality : this.enterprise.idMunicipality,
      

    }//pendiente diseño para pruebas
    if(this.erorrs.length ==0)
    {
      this.editarService.UpdateEnterprise(this.idEnterprise, edita).subscribe(
        (resp:any)=>{
          alert("editado");
          this.redirect.navigate(['/enter-prise']);
        },
        (error:any)=>{
          this.erorrs.push('hubo un error al editar el formulario');
          console.log(error);
          console.log(error.message);
          return;
        }
      );
    }else{
      return;
    }
  }

}
