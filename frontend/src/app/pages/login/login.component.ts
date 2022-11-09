import { AuthService } from './../../service/auth.service';
import { ProductService } from './../../components/product.service';
import { Component, OnInit } from '@angular/core';
import { Route, RouterLink, RouterOutlet } from '@angular/router';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public id:string = "" 
  public senha:string=""

 

  public usuario: Usuario = new Usuario();


  constructor(private productService:ProductService, private authService:AuthService) { }

  ngOnInit(): void {
    
  }
   

 fazerLogin(){
    //console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
 }

 fazerLogout(){
  this.usuario.nome= '';
  this.usuario.senha= '';
  this.authService.fazerLogin(this.usuario);
 }

}
