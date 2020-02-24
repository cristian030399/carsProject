import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  public API = '//thawing-chamber-47973.herokuapp.com';
  public OWNER_API = this.API + '/owners';
  public Search_API = this.OWNER_API + '/search/findByDni?dni=';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.OWNER_API);
  }

  get(id: string) {
    return this.http.get(this.Search_API + id);
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
