import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  set(name: string, data: string) {
    sessionStorage.setItem(name, btoa(data));
  }

  get(name) {
    return atob(sessionStorage.getItem(name));
  }

  clear() {
    sessionStorage.clear();
  }
}
