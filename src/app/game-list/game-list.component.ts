import { Component, OnInit } from '@angular/core';
import { GameService } from '../game-service.service';

export class Game {
  _id!: number;
  title!: string;
  price!: number;
  minPlayers!:number
  maxPlayers!:number
  publisher!:{
    name:string
  }
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games: Game[];
  constructor(private gameService: GameService) {
    this.games = [];
  }

  ngOnInit(): void {
    this.getGameList();
  }

  private getGameList() {
    this.gameService
      .getGameList()
      .then(games => this.games = games)
  }
}
