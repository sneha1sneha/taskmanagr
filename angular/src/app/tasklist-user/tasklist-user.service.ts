import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of,map} from 'rxjs';



export interface TasklistuserContext {

}

@Injectable({
    providedIn: 'root',
  })
  export class TasklistuserService {
    constructor(private http:HttpClient) {}
  
/**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */

 getTasklist(): Observable<any> {
    return this.http.get(`/project/tasklist`, { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        console.log(res.body.data[0]);
        return res.body.data;
      })
    );
  }

  
  
}



