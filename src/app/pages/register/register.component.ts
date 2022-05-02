import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from './register.service';
import { usuariosI } from 'src/app/models/usuarios.interface';
import { usuarioI } from 'src/app/models/usuario.interface';
import { RegisterI } from 'src/app/models/register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  idUser:number;
 registers: RegisterI[]=[];
 usuarios: usuarioI[]=[];
  isLoading = true;

  constructor( private Registerservice: RegisterService,
                private redirect: Router, private route: ActivatedRoute) { }


                           
  ngOnInit(): void {
    /*if (localStorage.getItem('token')== null) {
      this.redirect.navigate(['login']);
    }*/
    this.idUser = +this.route.snapshot.paramMap.get('id')!;
   /* let idUser = this.route.snapshot.paramMap.get('id');
    console.log(idUser);*/

    let token = this.getToken();
      console.log(token);
    
    
    this.getAllRegister();
    
  }
  getToken(){
    return localStorage.getItem('token');
  }
  

  getAllRegister(){
    this.Registerservice.getAllRegister().subscribe((resp:RegisterI[])=>{
      this.registers=resp;
      this.isLoading = false;
    });

  }
 
  editarRegister(id:any){
    this.redirect.navigate(['edit-register', id]);
    console.log(id)
  }
  deleteRegister(Register:RegisterI){
    if (confirm("¿Esta seguro de eliminar esto?"))
     {
      this.Registerservice.DeleteEnterprise(Number(Register.idUser)).subscribe(()=>{
        window.location.reload();
      });  
    }
  }


}
