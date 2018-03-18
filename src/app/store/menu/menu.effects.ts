import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import 'rxjs/operator/catch';

import * as MenuAction from './menu.action';
import { MenuService } from '../../services/menu.service';
import { MenuItemState } from './menu-item.state';

@Injectable()
export class MenuEffects {
    constructor(
        private menuService: MenuService,
        private actions$: Actions
    ) { }

    @Effect()
    getMenu$: Observable<Action> = this.actions$
        .ofType<MenuAction.GetMenu>(MenuAction.GET_MENU)
        .pipe(
            switchMap(_ => this.menuService.getMenu()),
            map(menu => new MenuAction.GetMenuSuccess(menu as MenuItemState[])),
            catchError((error: any): Observable<any> => { return of(new MenuAction.GetMenuError()) })
        )
}