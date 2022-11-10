
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IotApiService } from 'src/app/service/iot-api.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  

  public getAllTempo : any
  
   public nomeTitle: string = "Historic of Local"
  public setAllTemp :any 

  constructor(private iotService: IotApiService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {



    const id = +this.route.snapshot.paramMap.getAll("id");
    this.iotService.readByid(id).subscribe(res => {
      this.setAllTemp = res
     this.getAllTempo = this.setAllTemp; 
     console.log(this.getAllTempo)
      }
      )}
  
  
}
