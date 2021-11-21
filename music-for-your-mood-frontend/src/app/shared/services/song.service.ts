import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../data-types/song';

const ENVIRONMENT = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private ENVIRONMENT: string;

  constructor(private http: HttpClient) {
    this.ENVIRONMENT = ENVIRONMENT;
  }

  public findAll(): Observable<Song[]> {
    const path = `${this.ENVIRONMENT}/songs/get-all`
    return this.http.get<Song[]>(path);
  }

  public addSong(song: Song): Observable<any> {
    const path = `${this.ENVIRONMENT}/songs/add-song`
    return this.http.post<Song>(path, song);
  } 
}
