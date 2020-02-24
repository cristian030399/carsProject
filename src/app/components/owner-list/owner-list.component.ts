import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';

import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  owners: Array<any>;
  borrar = false;

  constructor(private ownerService: OwnerService, private carService: CarService) { }

  ngOnInit() {
    this.ownerService.getAll().subscribe(data => {
      this.owners = data._embedded.owners;
    });
  }

  borrarOwner() {
    let elementos = [];
    elementos = [document.getElementsByTagName('input')];
    for (let elemento of elementos[0]) {
      if (elemento.checked) {
        this.ownerService.remove(elemento.value).subscribe(result => {
          this.ngOnInit();
        }, error => console.error(error));
        this.quitarRelacion(elemento.id);
      }
    }
    this.borrar = !this.borrar;
  }

  quitarRelacion(dni: string){
    this.carService.getAll().subscribe(data => {
      let cars = data;
      cars.forEach(carAux => {
        if (carAux.ownerDni == dni) {
          carAux.ownerDni = null;
          this.carService.save(carAux).subscribe(result => { }, error => console.error(error));
        }
      });
    });
  }

}
