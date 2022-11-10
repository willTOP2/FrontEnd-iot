import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';
import { IotApiService } from 'src/app/service/iot-api.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'condicao', 'temp'];
  dataSource = this.iotService.apiAll();
  orderHeader: string = '';
  isDescOrder: boolean = true;

  public value:string = ""   


  
  public nomeTitle:string = "Notifications"
  
  public getAllTemp : any;  
  public setAllTemp :any;

  sort(headerName:string){
    this.isDescOrder = !this.isDescOrder;
    this.orderHeader = headerName;
  }
  
  
  constructor(private iotService: IotApiService) { }

  ngOnInit(): void {
    this.iotService.apiAll().subscribe(
      res=> {
       this.setAllTemp = res; 
       this.getAllTemp = this.setAllTemp
      }
        
      );

      

  }

  search(e: Event) {
    const target = e.target as HTMLInputElement; 
    const value = target.value; 
  
     const filter = this.setAllTemp.filter( (res :any) => { 
   
   return !res.nome.indexOf(value.toUpperCase())
     }); 
     this.getAllTemp = filter
   }  
   
  
  
    public getSearch(value: string) {
  
      const filter = this.setAllTemp.filter( (res:any) =>{
        return !res.nome.indexOf(value.toUpperCase())
      }); 
       this.getAllTemp =filter
    }
    
 
}
