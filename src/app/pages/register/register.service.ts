import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url='https://localhost:44307/Api/InfoAll/';
  constructor(private http: HttpClient) { }

  register(register:Register){
// alert("kk");
 return this.http.post<any>(this.url,register);
  }

// console.log(register);

}
