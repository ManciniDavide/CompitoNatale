import { Component } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.css']
})
export class SecondoComponent {
  title = 'Lavoro Natale';

  ARMI = [
    {id: 1, name:'Glock17   .',calibro:'9mm   .',costo:'640,00 €   .',provenienza:'AT'},
    {id: 2, name:'Beretta92   .',calibro:'9mm   .',costo:'1.783,00   .',provenienza:'ITA'},
    {id: 5, name:'Ruger   .',calibro:'9mm   .',costo:'sopra i 1.000€   .',provenienza:'USA'},
    {id: 3, name:'Taurus   .',calibro:'9mm   .',costo:'800€',provenienza:'BR'},
    {id: 4, name:'Fn America   .',calibro:'9mm   .',costo:'940€   .',provenienza:'USA'}
  ]

}

