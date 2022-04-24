import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { enterpriseI } from 'src/app/models/enterprise.interface';
import { logI } from 'src/app/models/log.interface';

import { EnterpriseService } from './enterprise.service';


@Component({
  selector: 'app-enter-prise',
  templateUrl: './enter-prise.component.html',
  styleUrls: ['./enter-prise.component.scss']
})
export class EnterPriseComponent implements OnInit {

  idEnterprise: number | undefined;
  enterprises: enterpriseI[]=[];
  
  idUser!: number;
 
  constructor( private enterpriseserve: EnterpriseService, private redirect: Router,
     private route: ActivatedRoute,) { }

    

  ngOnInit(): void {
   
    if (localStorage.getItem('token')== null) {
      this.redirect.navigate(['login']);
    }
   this.idEnterprise = +this.route.snapshot.paramMap.get('id')!;
    this.getAllenterprise();
    //
    
  }
  getAllenterprise(){
    this.enterpriseserve.GetAllEnterprise().subscribe((resp:enterpriseI[])=>{
      this.enterprises=resp;
      console.log(resp)
      
    });
  }
  //
  editarEnterprise(id){
    this.redirect.navigate(['edit-enterprise', id]);
    console.log(id);
  }
  
  
}
