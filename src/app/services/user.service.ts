import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  async getUserById(id: string): Promise<any> {
    return await this.http.get<any>(`http://jsonplaceholder.typicode.com/users/${id}`).toPromise();


  }


}
