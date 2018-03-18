import { Action } from '@ngrx/store';
import { MenuItemState } from './menu-item.state';
import { MenuItem } from '../../models/menu-item.model';

export const GET_MENU = '[Menu] GET_MENU';
export const GET_MENU_SUCCESS = '[Menu] GET_MENU_SUCCESS';
export const GET_MENU_ERROR = '[Menu] GET_MENU_ERROR';

export const GET_MENUITEM = '[Menu] GET_MENUITEM';

export class GetMenu implements Action {
    readonly type = GET_MENU;
}

export class GetMenuSuccess implements Action {
    readonly type = GET_MENU_SUCCESS;
    constructor(public payload: MenuItemState[]) { }
}

export class GetMenuError implements Action {
    readonly type = GET_MENU_ERROR;
}

export class GetMenuItem implements Action {
    readonly type = GET_MENUITEM;
    constructor(public payload: number) { }
}

export type All = GetMenu | GetMenuSuccess | GetMenuError | GetMenuItem;