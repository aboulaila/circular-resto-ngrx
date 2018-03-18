import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { MenuItemDetailComponent } from './components/menu-item-detail/menu-item-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/menu', pathMatch: 'full' },
  {path: 'menu', component: MenuComponent },
  {path: 'detail/:id', component: MenuItemDetailComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
