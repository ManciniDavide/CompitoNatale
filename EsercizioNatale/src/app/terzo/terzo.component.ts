import { Component } from '@angular/core';

@Component({
  selector: 'app-terzo',
  templateUrl: './terzo.component.html',
  styleUrls: ['./terzo.component.css']
})
export class TerzoComponent {
  ARMILUNGHE = [
    {id: 1, name:'AK-47     .',calibro:'7,62mm   .',costo:'640,00 €   .',provenienza:'AT'},
    {id: 2, name:'M4A1     .',calibro:'5,56 mm   .',costo:'sopra i 1.200,00 €   .',provenienza:'USA'},
    {id: 3, name:'Minimi     .',calibro:'7,62 mm   .',costo:'sopra i 2.000 €   .',provenienza:'ITA'},
    {id: 4, name:'BerettaARX     .',calibro:'5,56 mm   .',costo:'sopra i 1.200,00 €   .',provenienza:'ITA'}
  ]
}
