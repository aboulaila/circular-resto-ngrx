import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MenuItem } from '../models/menu-item.model';

@Injectable()
export class MenuService {

  private MENU: MenuItem[];
  private json = './assets/menu.json';

  constructor(private http: HttpClient) {
  }

  getMenu(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.json);
  }
}
