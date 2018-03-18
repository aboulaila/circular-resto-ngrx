import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { Location } from '@angular/common';
import { MenuState } from '../../store/menu/menu.state';
import { Store } from '@ngrx/store';
import { MenuItem } from '../../models/menu-item.model';

import * as MenuActions from '../../store/menu/menu.action';
import { MenuItemState } from '../../store/menu/menu-item.state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-menu-item-detail',
  templateUrl: './menu-item-detail.component.html',
  styleUrls: ['./menu-item-detail.component.css']
})
export class MenuItemDetailComponent implements OnInit {

  items$: Observable<MenuItemState[]>;

  constructor(
    private store: Store<MenuState>,
    private route: ActivatedRoute,
    private menuService: MenuService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.items$ = this.store.select(state => state.items);
    this.store.dispatch(new MenuActions.GetMenuItem(id));
  }

  goBack(): void {
    this.location.back();
  }
}
