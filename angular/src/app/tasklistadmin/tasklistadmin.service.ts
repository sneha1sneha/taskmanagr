import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of,map} from 'rxjs';



export interface TasklistadminContext {

}




/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class TasklistadminService {
  constructor(private http:HttpClient) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */

  getTaskListAdmin(): Observable<any> {
    return this.http.get(`/project/tasklistadmin`, { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        console.log(res.body);
        
        return res.body.data;
      })
    );
  }

  deletes(id:any): Observable<any> {
    return this.http.delete(`/project/delete/${id}`, { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        console.log(res.body);
        return res.body;
      })
    );
  }
  
}
