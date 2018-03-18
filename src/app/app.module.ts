import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './components/app.component';
import { MenuService } from './services/menu.service';
import { MenuComponent } from './components/menu/menu.component';
import { MenuEffects } from './store/menu/menu.effects';
import { MenuReducer } from './store/menu/menu.reducer';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuItemDetailComponent } from './components/menu-item-detail/menu-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemComponent,
    MenuItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ items: MenuReducer }),
    EffectsModule.forRoot([MenuEffects])
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
