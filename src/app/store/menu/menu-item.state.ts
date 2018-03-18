import { MenuItem } from "../../models/menu-item.model";

export interface MenuItemState extends MenuItem {
    loading: boolean;
}