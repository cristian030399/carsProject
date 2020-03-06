import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from 'src/app/services/owner.service';
import { CarService } from 'src/app/services/car.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})
export class OwnerEditComponent implements OnInit {
  owner: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ownerService: OwnerService, private carService: CarService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const dni = params['id'];
      if (dni) {
        this.ownerService.get(dni).subscribe((data: any) => {
          this.owner = data._embedded.owners[0];
          this.owner.href = this.owner._links.self.href;
        });
      }
    });

  }

  gotoList() {
    this.router.navigate(['/owner-list']);
  }

  save(owner: NgForm) {
    this.ownerService.save(owner).subscribe(result => {
      this.gotoList();
    });
  }

  remove() {
    this.ownerService.remove(this.owner._links.self.href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
    this.quitarRelacion(this.owner.dni);
  }

  quitarRelacion(dni: string) {
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
