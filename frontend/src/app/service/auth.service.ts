import { LoginComponent } from 'src/app/pages/login/login.component';
import { IotApiService } from 'src/app/service/iot-api.service';
import { ProductService } from './../components/product.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../pages/login/usuario';
import  { MonitoracaoComponent } from '../pages/monitoracao/monitoracao.component'
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router,private http: HttpClient,
     private productService: ProductService, private iotApiService: IotApiService) { }


  private url: string = 'http://localhost:4000' 



   public sign(payload: {email:string; password:String}): Observable<any>{

      return this.http.post<{token:string}>(`${this.url}/sign`, payload).pipe(
         map( (res) =>{ 
          localStorage.removeItem('access_token');
           localStorage.setItem('acess_token',res.token); 
           console.log(res)
           this.usuarioAutenticado = true;
           return this.router.navigate([''])
         }), 
         catchError((e) => { 
          this.usuarioAutenticado = false
          if(e.error.message) return throwError(() => e.error.message)  
          return throwError(() => "No momento não estamos conseguindo validar este dados, tente novamente mais tarde!")
         })
      )
   }






  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'teste' &&
        usuario.senha === 'teste') {
          
        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);
        this.router.navigate([""]);
        this.productService.showMessage("Login realizado com sucesso!!");

    }
    else{
      this.usuarioAutenticado = false;
      
      this.mostrarMenuEmitter.emit(false);
      this.productService.showMessage("Verifique seu ID ou Senha")
    }
  }

  

  

  UsuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

  
}

