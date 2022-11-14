
import { LoginComponent } from './../login/login.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap, reduce } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ProductService } from 'src/app/components/product.service';
import { IotApiService } from 'src/app/service/iot-api.service';


@Component({
  selector: 'app-monitoracao',
  templateUrl: './monitoracao.component.html',
  styleUrls: ['./monitoracao.component.css']
})
export class MonitoracaoComponent implements OnInit {
 @Output() public emmitSearch: EventEmitter<any> = new EventEmitter()

  public value:string = "" 

  public getAllTemp : any 
  
public loading= false
  public setAllTemp :any  
  hoje: Date = new Date();


 
 
  constructor(private iotService: IotApiService) { }

  ngOnInit(): void { 

    
   
    this.iotService.apiAll().subscribe(
      res=> {
   
         this.setAllTemp = res
         this.getAllTemp = this.setAllTemp
         console.log(this.getAllTemp.Items)
       
      } )
 }




  public getSearch(value: string) {
  const filter = this.getAllTemp 
   .filter(( res: any) => {
       return !res.temperatura.S.indexOf(value.toLowerCase())
   })
  this.getAllTemp = filter
       
  }


  
 
 

    
}
