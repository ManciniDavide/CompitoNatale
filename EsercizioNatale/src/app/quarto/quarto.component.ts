import { Component } from '@angular/core';

@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.component.html',
  styleUrls: ['./quarto.component.css']
})
export class QuartoComponent {
  
  FUCILIPRECISIONE = [
    {id: 1, name:'Armalite AR-30     .',calibro:'7.62mm   .',costo:'3.000€   .',provenienza:'USA'},
    {id: 2, name:'AWC G2     .',calibro:'7,62 mm   .',costo:'2000€   .',provenienza:'USA'},
    {id: 5, name:'Barrett M82     .',calibro:'12.7 mm   .',costo:'sopra i 1500€   .',provenienza:'USA'},
    {id: 3, name:'Beretta M501     .',calibro:'7,62 mm   .',costo:'1000   .',provenienza:'ITA'},
    {id: 4, name:'Blaser R 93 Tactical     .',calibro:'7.62 mm   .',costo:'sopra i 3.000€   .',provenienza:'ITA'}
  ]
}
