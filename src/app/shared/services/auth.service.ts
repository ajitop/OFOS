import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
    providedIn: "root",
  })
  export class AuthService {
    constructor(private http: HttpClient) { }

    rootURL = 'http://67.205.165.41/ofos/api';

    login(data){
      var headers_object = new HttpHeaders();
      headers_object.append('Content-Type', 'application/json');
      headers_object.append("Authorization", "Basic " + btoa("username:password"));
      
      const httpOptions = {
        headers: headers_object
      };
        return this.http.post(this.rootURL + '/auth.php', data, httpOptions);
        
    }
    registration(data:any){
       return this.http.post(this.rootURL + '/register.php', data)
        
    }
  }
