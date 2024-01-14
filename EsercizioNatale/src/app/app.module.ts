import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondoComponent } from './secondo/secondo.component';
import { SampleComponent } from './sample/sample.component';
import { TerzoComponent } from './terzo/terzo.component';
import { QuartoComponent } from './quarto/quarto.component';
import { NgifComponent } from './ngif/ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondoComponent,
    SampleComponent,
    TerzoComponent,
    QuartoComponent,
    NgifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
