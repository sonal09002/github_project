import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}
  getrepoDetail(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get('https://api.github.com/users/sonal09002/repos')
        .pipe(map((Response) => Response))
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  // postRepo(data){
  //   return this.http.post('https://api.github.com/user/repos',data);
  // }
}
