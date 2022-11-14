import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IotApiService { 

  public urls:string = 'https://26fuifhi25.execute-api.us-east-1.amazonaws.com/test/teste?id'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {
 
   
   }

   public result:any

  

 public apiAll(): Observable<any>{
  
  return this.http.get<any>(`${this.urls}=${'A02'}`) 
    .pipe( 
        tap(res => res) ,
        tap(res => {
           res.Items.map( (resTemp: any) =>{
             this.http.get<any>(resTemp.urls).pipe(
              map(
              res=> res
              )
             ).subscribe( res => resTemp = res)
           })
           
           } )
          
    )
}





   public apiGetIDTemp(url: string) : Observable<any> {
    
     return this.http.get<any>(url).pipe(
      map(
        res=> res
      )
     )
   }

   




  public readByid (id: string): Observable<any>{ 
    return this.http.get<any>(`${this.urls}=${id}`)
     .pipe( 

      tap(res => {
         res.Items.map( (resTemp: any) =>{
           this.http.get<any>(resTemp.urls).pipe(
            map(
            res=> res
            )
           ).subscribe( res => resTemp = res)
         })
         
         } )
        
  )
   
  }




  
  }