import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameListComponent} from './game-list/game-list.component';
import {OrderPipe} from './order.pipe';
import {HomepageComponent} from './homepage/homepage.component';
import {GameDetailComponent} from './game-detail/game-detail.component';
import {AddGameComponent} from './add-game/add-game.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditGameComponent } from './edit-game/edit-game.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    OrderPipe,
    HomepageComponent,
    GameDetailComponent,
    AddGameComponent,
    LoginComponent,
    RegisterComponent,
    EditGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomepageComponent
      },
      {
        path: "games",
        component: GameListComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
      },
      {
        path: "games/new",
        component: AddGameComponent,
      },
      {
        path: "games/:gameId",
        component: GameDetailComponent,
        pathMatch: 'full'
      },
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
