import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersBackendService {

  constructor(private http: Http) { }

  fetchAllUsers() {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('/api/users/fetchAll', {headers: headers}).map(res => res.json());
  }

  fetchUserByID(userId: number) {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/users/fetchUserById', userId, {headers: headers}).map(res => res.json());
  }

  fetchById(userId: Number) {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/sqe/price/' + userId, {}, {headers: headers}).map(res => res.text());
  }
}
