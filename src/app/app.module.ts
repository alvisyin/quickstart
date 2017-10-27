import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LibraryComponent } from "./library.component";
import { CollectionComponent } from "./collection.component";
import { CatalogueService } from "./catalogue.service";
import { HeaderComponent } from "./header.component";
import { ROUTING } from "./app.routing";

@NgModule({
  imports:      [
    BrowserModule,
    ROUTING
  ],
  declarations: [
    AppComponent,
    LibraryComponent,
    CollectionComponent,
    HeaderComponent
  ],
  providers:    [ CatalogueService ],
  bootstrap:    [ AppComponent ]    // bootstrap the root component
})
export class AppModule { }
