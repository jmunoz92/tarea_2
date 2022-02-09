import { Component, OnInit } from '@angular/core';
import { GameofthronesService } from '../services/gameofthrones.service';

@Component({
  selector: 'app-gameofthrone',
  templateUrl: './gameofthrone.component.html',
  styleUrls: ['./gameofthrone.component.css']
})
export class GameofthroneComponent implements OnInit {
vGameOf:any;
  constructor(private GameofService:GameofthronesService) { }

  ngOnInit(): void {

    this.getGame();
  }

getGame(){
this.GameofService.getGameofThrones().subscribe( respuesta=>{

  console.log (respuesta);
  this.vGameOf = respuesta;
})
}

}
