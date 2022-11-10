import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthComponent  {

  private url: string = 'http://localhost:4000' 

  constructor(private http: HttpClient, private router: Router) { }  

   public sign(payload: {email:string; password:String}): Observable<any>{

      return this.http.post<{token:string}>(`${this.url}/sign`, payload).pipe(
         map( (res) =>{ 
          localStorage.removeItem('access_token');
           localStorage.setItem('acess_token',res.token); 

           return this.router.navigate(['home'])
         }), 
         catchError((e) => { 
          if(e.error.message) return throwError(() => e.error.message)
          return throwError(() => "No momento não estamos conseguindo validar este dados, tente novamente mais tarde!")
         })
      )
   }
}
