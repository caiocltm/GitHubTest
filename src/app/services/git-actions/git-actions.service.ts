import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from '../sessions/session.service';
import { AuthGit } from '../../interfaces/auth-git.interface';

@Injectable({
  providedIn: 'root'
})
export class GitActionsService {

  constructor(
    private httpClient: HttpClient,
    private session: SessionService
  ) { }

  validateSession(code: string) {
    return this.httpClient.post<AuthGit>('https://pangitauth.herokuapp.com/api/auth', {
          code,
          server: window.location.hostname
    }, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      }
    );
  }

  getUserData(accessToken: string) {
    return this.httpClient.get(`https://api.github.com/user?access_token=${accessToken}`, {
      headers: this.getHeader(accessToken)
    });
  }

  getUserRepo(user: string) {
    return this.httpClient.get(`https://api.github.com/users/${user}/repos`, {
      headers: this.getHeader(this.session.get('token'))
    });
  }

  getAccessToken(query: string) {
    return query.split('&')[0].split('=')[1];
  }

  getHeader(token: string) {
    return new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
  }
}
