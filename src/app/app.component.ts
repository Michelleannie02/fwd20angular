import { Component } from '@angular/core';
import { StarWarsService } from './star-wars.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-service';
  planets: Observable<any>;

  constructor(
    private starWarsService: StarWarsService
    ) {
    
  }

  ngOnInit() {
    this.planets = this.starWarsService.getPlanets();
  }
/*
  handleClick = () => {
    this.starWarsService.getPlanets().subscribe(
      data => {this.planets = data.results}
    );
  } */

}
