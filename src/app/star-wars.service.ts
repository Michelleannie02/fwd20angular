import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<any> {
    return this.http.get<any>('https://swapi.dev/api/planets/');
  }
}
