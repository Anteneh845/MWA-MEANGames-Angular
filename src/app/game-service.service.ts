import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Game } from './game-list/game-list.component';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) {
  }

  getGameList(): Promise<Game[]> {
    return this.httpClient.get<Game[]>("/api/games")
      .toPromise()
      .then(this.handleSuccess)
      .catch();
  }
  getGameDetail(gameId:string): Promise<Game> {
    return this.httpClient.get<Game>("/api/games/"+gameId)
      .toPromise()
      .then(this.handleSuccess)
      .catch();
  }

  private handleSuccess(response:any) {
    return response;
  }

}
