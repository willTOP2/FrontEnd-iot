import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { LoginComponent } from '../../../pages/login/login.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 


  @Input()  public title: string = "Temperature Monitoring"
  

  constructor() { 
   
    
  }
  
  ngOnInit(): void {
  }

  
  
 
  

}
