import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuState } from '../../store/menu/menu.state';
import { Observable } from 'rxjs/Observable';
import { MenuItemState } from '../../store/menu/menu-item.state';

import * as MenuActions from '../../store/menu/menu.action';

@Component({
  selector: 'circular-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private store: Store<MenuState>
  ) { }

  menuState$: Observable<MenuItemState[]>;

  ngOnInit() {
    this.menuState$ = this.store.select(state => state.items);
    this.store.dispatch(new MenuActions.GetMenu());
  }

  test(): void {
    console.log(this.menuState$, this.store);
  }

}
