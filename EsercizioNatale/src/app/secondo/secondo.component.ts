import { Component } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.css']
})
export class SecondoComponent {
  title = 'Lavoro Natale';

  ARMI = [
    {id: 1, name:'Glock17',calibro:'9mm',costo:'640,00 €',provenienza:'AT'},
    {id: 2, name:'Beretta92',calibro:'9mm',costo:'1.783,00',provenienza:'ITA'},
    {id: 5, name:'M4A1',calibro:'5,56 mm',costo:'sopra i 1.200,00 €',provenienza:'USA'},
    {id: 3, name:'Minimi',calibro:'5,56 mm e 7,62 mm',costo:'...',provenienza:'ITA'},
    {id: 4, name:'BerettaARX',calibro:'5,56 mm',costo:'sopra i 1.200,00 €',provenienza:'ITA'}
  ]

}

