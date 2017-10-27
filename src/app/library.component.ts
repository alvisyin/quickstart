import { Component, OnInit } from '@angular/core';

import { Book } from "./book.model";
import { CatalogueService } from "./catalogue.service";

@Component({
  selector: 'library',
  templateUrl: './library.component.html'
  //inputs: ['catalogue']   // receives the information and uses it as a normal variable
})

export class LibraryComponent implements OnInit {
  catalogue: Book[];

  constructor(private catalogueService: CatalogueService) {}

  onAddToCollection(item: Book) {
    this.catalogueService.addToCollection(item);
  }

  ngOnInit() {
    this.catalogue = this.catalogueService.getCatalogue();
  }
}
