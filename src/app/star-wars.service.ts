import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private http: HttpClient) { }

  getPlanets() {
    return this.http.get<any>('https://swapi.dev/api/planets/');
  }
}
