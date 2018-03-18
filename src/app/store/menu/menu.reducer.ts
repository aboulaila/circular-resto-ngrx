import * as MenuActions from './menu.action';
import { MenuState } from './menu.state';

export type Action = MenuActions.All;

const defaultState: MenuState = {
    items: [],
    loading: false
};

export function MenuReducer(state = defaultState, action: Action) {
    switch (action.type) {
        case MenuActions.GET_MENU:
            return { ...state, loading: true, items: [] }
        case MenuActions.GET_MENU_SUCCESS:
            return { ...state, loading: false, items: [...action.payload] }
        case MenuActions.GET_MENU_ERROR:
            return { ...state, loading: false, items: [...state.items] }
        case MenuActions.GET_MENUITEM:
            return { ...state, items: [state.items.find(i => i.id === action.payload)] }
        default:
            return state;
    }
}