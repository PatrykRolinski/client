import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl= environment.apiUrl;
  private currentUserSource= new ReplaySubject<User>(1);
  currentUser$= this.currentUserSource.asObservable();
  
  constructor(private http:HttpClient, private router:Router) { }

  login(model:any){
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True' });
    return this.http.post(this.baseUrl + "Account/login", model, {headers:reqHeader, responseType:'text' as const}).pipe(map((response)=>{
      const token= response
      if(token){
        localStorage.setItem("user", JSON.stringify(token))  
        this.setCurrentUser(token)     
        
    }
  }))
}

register(model:any){
  return this.http.post(this.baseUrl +"account/register",model).subscribe({
    next: response=> console.log(response),
    error: error=> console.log(error),
    complete: ()=> this.router.navigateByUrl('account/register-success')

  })
}



 setCurrentUser(User:any){
  this.currentUserSource.next(User)
 }


logout(){
   localStorage.removeItem("user");
  this.currentUserSource.next(null)
  
 }
}
