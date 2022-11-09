import { LoginComponent } from 'src/app/pages/login/login.component';
import { IotApiService } from 'src/app/service/iot-api.service';
import { ProductService } from './../components/product.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../pages/login/usuario';
import  { MonitoracaoComponent } from '../pages/monitoracao/monitoracao.component'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private productService: ProductService, private iotApiService: IotApiService) { }

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

