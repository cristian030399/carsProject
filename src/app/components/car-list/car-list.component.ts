import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import { GiphyService } from 'src/app/services/giphy.service';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Array<any>;

  constructor(private carService: CarService, private giphyService: GiphyService, private ownerService: OwnerService) { }

  ngOnInit() {
    this.carService.getAll().subscribe(data => {
      this.cars = data;
      for (const car of this.cars) {
        this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
      }
    });
  }

}
