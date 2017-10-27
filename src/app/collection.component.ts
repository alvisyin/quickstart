import { Component, OnInit } from '@angular/core';
import { Book } from "./book.model";
import { CatalogueService } from "./catalogue.service";

@Component({
  selector: 'collection',
  templateUrl: './collection.component.html',
})

export class CollectionComponent implements OnInit {
  borrowedItems: Book[] = [];

  constructor(private catalogueService: CatalogueService) {}

  onRemoveFromBorrowedItems(item: Book) {
    this.catalogueService.removeFromCollection(item);
  }

  ngOnInit() {
    this.borrowedItems = this.catalogueService.getCollection();
  }
}
