
import { ProductService } from './components/product.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
 templateUrl: 'app-component.html'
})
export class AppComponent implements OnInit {

 
  mostrarMenu: boolean = false;


  constructor(private authService: AuthService) {

   }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar

    );
  }
}