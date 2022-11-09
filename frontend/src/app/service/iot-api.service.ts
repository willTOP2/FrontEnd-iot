import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IotApiService { 

  private url:string = 'http://localhost:3000/'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {
 
   
   }

   public result:any

 public apiAll(): Observable<any>{
  return  this.http.get<any>(`${this.url}results`)
      .pipe(
       res => res,
  ) }

  public readByid (id: number): Observable<any>{
    const url = `${this.url}results/${id}`;
    return this.http.get<any>(url).pipe(map((res) => res))
  }




  
  }