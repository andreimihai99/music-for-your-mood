import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listener } from '../data-types/listener';

const ENVIRONMENT = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private ENVIRONMENT: string;

  constructor(private http: HttpClient) {
    this.ENVIRONMENT = ENVIRONMENT;
  }

  public findListenerByEmail(email: string): Observable<Listener> {
    const path = `${this.ENVIRONMENT}/listeners/get-by-email/${email}`;
    return this.http.get<Listener>(path);
  }

  public findAll(): Observable<Listener[]> {
    const path = `${this.ENVIRONMENT}/listeners/get-all`;
    return this.http.get<Listener[]>(path);
  }
}
