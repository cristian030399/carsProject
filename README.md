# CarsProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# carsProject


# Car-list Component
El componente car-list es el encargado de mostrar la lista de carros que hay guardados, ademas es desde donde se puede acceder a car-edit, haciendo click en uno de los carros o en el botón add.

# Car-edit Component
En el componente car-edit es donde se agregan y modifican los carros, permitiendo seleccionar un nombre del carro y un propietario para este. El propietario debe estar registrado para que se pueda seleccionar.

# Owner-list Component
En este componente se listan todos los propietarios registrados, permite borrar varios propietarios a la vez y también es desde donde se accede al componente owner-edit, haciendo click sobre un propietario o en el botón add.

# Owner-edit Component
En este componente se agregan y modifican los propietarios, se debe tener nombre, identificación y profesión. También permite borrar a un propietario.

# Car service
Este servicio consume dos APIs, que son https://thawing-chamber-47973.herokuapp.com/cool-cars y https://thawing-chamber-47973.herokuapp.com/cars que son las que se usan para realizar el crud referente a los carros. Sus metodos son:
  •getAll(): Este método devuelve todos lo carros registrados.
  •get(id: string): Este método devuelve la información de un solo carro, buscándolo por id.
  •save(car: any): Guarda el carro que se le envía.
  •remove(href: string): Este método usa el href para buscar un carro y borrarlo de la lista de carros.

# Owner service
Este servicio consume la API https://thawing-chamber-47973.herokuapp.com/owners que se usa para realizar el crud referente a los propietarios. Sus metodos son:
  •getAll(): Este método devuelve todos los propietarios registrados.
  •get(id: string): Este método devuelve la información de un solo propietario, buscándolo por id.
  •save(owner: any): Guarda el propietario que se le envía.
  •remove(href: string): Este método usa el href para buscar un propietario y borrarlo de la lista de propietarios.
