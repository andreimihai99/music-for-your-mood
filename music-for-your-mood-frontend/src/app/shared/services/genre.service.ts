import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../data-types/genre';

const ENVIRONMENT = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private ENVIRONMENT: string;

  constructor(private http: HttpClient) {
    this.ENVIRONMENT = ENVIRONMENT;
  }

  public findAll(): Observable<Genre[]> {
    const path = `${this.ENVIRONMENT}/genres/get-all`
    return this.http.get<Genre[]>(path);
  }

  public addGenre(genre: Genre): Observable<any> {
    const path = `${this.ENVIRONMENT}/genres/add-genre`
    return this.http.post<Genre>(path, genre);
  } 
}
