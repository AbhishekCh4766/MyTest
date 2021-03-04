import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_API_SERVER = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  // public getTask() : Observable<any>{
  //   return this.httpClient.get(this.REST_API_SERVER+'task');
  // }

  public getTask() {
    return this.httpClient.get(this.REST_API_SERVER+'task');
  }

  public deleteTask(id) {
    return this.httpClient.delete(this.REST_API_SERVER+'task/'+id);
  }


   public sendFormData(form){
   
     return this.httpClient.post(this.REST_API_SERVER+'task', form);
  }


}
