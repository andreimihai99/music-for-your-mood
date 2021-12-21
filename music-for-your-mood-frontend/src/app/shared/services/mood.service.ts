import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mood } from '../data-types/mood';

const ENVIRONMENT = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})

export class MoodService {

  private ENVIRONMENT: string;

  constructor(private http: HttpClient) {
    this.ENVIRONMENT = ENVIRONMENT;
  }

  public findAll(): Observable<Mood[]> {
    const path = `${this.ENVIRONMENT}/moods/get-all`
    return this.http.get<Mood[]>(path);
  }

  public findById(id: number): Observable<Mood> {
    const path = `${this.ENVIRONMENT}/moods/get-mood/${id}`
    return this.http.get<Mood>(path);
  }

  public findByName(name: string): Observable<Mood> {
    const path = `${this.ENVIRONMENT}/moods/get-mood-name/${name}`
    return this.http.get<Mood>(path);
  }

  public addMood(mood: Mood): Observable<any> {
    const path = `${this.ENVIRONMENT}/moods/add-mood`
    return this.http.post<Mood>(path, mood);
  } 

  public deleteMood(id: number): Observable<any> {
    const path = `${this.ENVIRONMENT}/moods/delete-mood/${id}`;
    return this.http.delete<Mood>(path);
  }
}
