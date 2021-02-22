import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  cats = [
    'Bob',
    'Rille',
    'Gunnar'
  ];

  constructor() { }

  listCats(){
    return console.log(this.cats);
  }
}
