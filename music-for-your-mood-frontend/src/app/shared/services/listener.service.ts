import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listener } from '../data-types/listener';

const ENVIRONMENT = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class ListenerService {

  private ENVIRONMENT: string;

  constructor(private http: HttpClient) { 
    this.ENVIRONMENT = ENVIRONMENT;
  }

  public makeAdmin(listener: Listener): Observable<Listener> {
    const path =  `${this.ENVIRONMENT}/listeners/make-admin`;
    return this.http.put<Listener>(path, listener);
  }

  public unmakeAdmin(listener: Listener): Observable<Listener> {
    const path =  `${this.ENVIRONMENT}/listeners/unmake-admin`;
    return this.http.put<Listener>(path, listener);
  }

  public deleteListener(id: number): Observable<any> {
    const path = `${this.ENVIRONMENT}/listeners/delete-listener/${id}`;
    return this.http.delete<Listener>(path);
  }
}
