import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../services/harrypotter.service'

@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.css']
})
export class HarrypotterComponent implements OnInit {
 vHarry:any;
  constructor( private HarryServicio:HarrypotterService) { }

  ngOnInit(): void {

    this.getHarry();
  }

getHarry(){

this.HarryServicio.getHarryPotter().subscribe(respuesta=>{

console.log (respuesta);
this.vHarry = respuesta;
})

}


}
