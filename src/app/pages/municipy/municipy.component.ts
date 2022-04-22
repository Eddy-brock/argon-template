import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MunicipyI } from 'src/app/models/municipy.interface';
import { MunicipyService } from './municipy.service';

@Component({
  selector: 'app-municipy',
  templateUrl: './municipy.component.html',
  styleUrls: ['./municipy.component.scss']
})
export class MunicipyComponent implements OnInit {

  municipyes:MunicipyI[];


  constructor(private serviceMunicipy: MunicipyService, private redirect: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    if (localStorage.getItem('token')== null) {
      this.redirect.navigate(['login']);
    }
    this.getAllMunicipy();
  }
  getAllMunicipy(){
    this.serviceMunicipy.GetAllEnterprise().subscribe((resp: MunicipyI[])=>{
      this.municipyes = resp;
      console.log(resp);
    });
  }

}
