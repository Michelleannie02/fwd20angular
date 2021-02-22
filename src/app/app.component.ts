import { Component } from '@angular/core';
import { CatsService } from './cats.service';
import { DogsService } from './dogs.service';
import { StarWarsService } from './star-wars.service';

interface Planets {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-service';
  planets: Planets[] = [];

  constructor(
    private catsService: CatsService,
    private dogsService: DogsService,
    private starWarsService: StarWarsService
    ) {
    
  }

  handleClick = () => {
    this.starWarsService.getPlanets().subscribe(
      data => {this.planets = data.results}
    );
  }
}
