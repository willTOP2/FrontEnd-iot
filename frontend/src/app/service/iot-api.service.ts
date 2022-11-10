import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IotApiService { 

  private url:string = 'https://26fuifhi25.execute-api.us-east-1.amazonaws.com'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {
 
   
   }

   public result:any

 public apiAll(): Observable<any>{

  var test = this.http.get<any>(`${this.url}/test/A01%27`) 
  console.log(test)
  return test
      .pipe(
       res => res,
  ) 
}

  public readByid (id: number): Observable<any>{
    const url = `${this.url}results/${id}`;
    return this.http.get<any>(url).pipe(map((res) => res))
  }




  
  }