import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  dogs = [
    'Buster',
    'Gurkin',
    'Holly'
  ];

  constructor() { }

  listDogs() {
    return console.log(this.dogs);
  }
}
