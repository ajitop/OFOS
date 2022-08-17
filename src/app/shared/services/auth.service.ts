import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  rootURL = "http://67.205.165.41/ofos/api";

  login(data) {
    console.log(data);
    var headers_object = new HttpHeaders();
    // headers_object.append();
    let username = data.username;
    let password = data.password;
    // headers_object.append();
    console.log(window.btoa(username + ":" + password));

    // const httpOptions = {
    //   headers: headers_object,
    // };
    // console.log(httpOptions);
    return this.http.post(this.rootURL + "/auth.php", data, {
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
        // "access-control-allow-origin": ""
        "Access-Control-Allow-Headers": "*",
        Accept: "*/*",
        Authorization: "Basic " + window.btoa(username + ":" + password),
      },
    });
  }
  registration(data: any) {
    return this.http.post(this.rootURL + "/register.php", data);
  }
}
