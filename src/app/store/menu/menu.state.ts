import { MenuItemState } from "./menu-item.state";

export interface MenuState {
    items: MenuItemState[];
    loading: boolean;
}