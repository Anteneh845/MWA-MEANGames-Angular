import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Game} from "../game-list/game-list.component";
import {GameService} from "../game-service.service";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  game!: Game;
  constructor(private route:ActivatedRoute,private gameService:GameService) { }

  ngOnInit(): void {
    this.getGameDetail()
  }

  getGameDetail(){
    let gameId = this.route.snapshot.paramMap.get('gameId');
    this.gameService.getGameDetail(gameId!)
      .then(game=>this.game=game)
  }
}
