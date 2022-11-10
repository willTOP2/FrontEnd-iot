import { AuthService } from '../../service/auth.service';
import { ProductService } from './../../components/product.service';
import { Component, OnInit } from '@angular/core';
import { Route, RouterLink, RouterOutlet } from '@angular/router';
import { Usuario } from './usuario';
import { FormGroup, Validators , FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public id:string = "" 
  public senha:string=""

  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]], 
    password: ['', [Validators.required]], 
    
   });
  
    public msgError!: string;
  

  public usuario: Usuario = new Usuario();


  constructor(private formBuilder: FormBuilder, 
    private productService:ProductService, private authService:AuthService) { }

  ngOnInit(): void {
    
  }
  
public submitForm(){  
    
  if(this.formAuth.valid){
   this.authService.sign({
      email: this.formAuth.value.email, 
      password: this.formAuth.value.password
   }).subscribe({
       next: (res:any) => res, 
       error: (e: any) => (this.msgError =  e),
   })
  }
}
   

 fazerLogin(){
    //console.log(this.usuario);
   
 }

 fazerLogout(){
  this.usuario.nome= '';
  this.usuario.senha= '';
 
 }

}
