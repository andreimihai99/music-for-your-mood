import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listener } from '../data-types/listener';

const ENVIRONMENT = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  private ENVIRONMENT: string;

  constructor(private http: HttpClient) {
    this.ENVIRONMENT = ENVIRONMENT;
  }

  public findAll(): Observable<Listener[]> {
    const path = `${this.ENVIRONMENT}/listeners/get-all`
    return this.http.get<Listener[]>(path);
  }

  public addListener(listener: Listener): Observable<any> {
    const path = `${this.ENVIRONMENT}/listeners/create-listener`
    return this.http.post<Listener>(path, listener);
  } 
}
