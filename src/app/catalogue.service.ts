import { Book } from "./book.model";

export class CatalogueService {
  private catalogue: Book[] = [
    new Book(1, "Harry Potter and the Philosopher's Stone", "J. K. Rowling", "Harry Potter and the Philosopher's Stone is the first novel in the Harry Potter series and J. K. Rowling's debut novel, first published in 1997 by Bloomsbury."),
    new Book(2, "Romeo and Juliet", "William Shakespeare", "Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young star-crossed lovers whose deaths ultimately reconcile their feuding families."),
    new Book(3, "The Lord of the Rings Trilogy", "J. R. R. Tolkien", "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien."),
    new Book(4, "Steve Jobs", "Walter Isaacson", "Steve Jobs is the authorized self-titled biography book of Steve Jobs.")
  ];

  private collection: Book[] = [];

  getCatalogue() { return this.catalogue; }

  getCollection() { return this.collection; }

  /* Borrow a book */
  addToCollection(item: Book) {
    // if the book is already in the borrowedItems, don't add it and return instead
    // if (this.collection.indexOf(item) !== -1) return;

    this.collection.push(item);
    this.catalogue.splice(this.catalogue.indexOf(item), 1);
  }

  /* Return a book */
  removeFromCollection(item: Book) {
    this.collection.splice(this.collection.indexOf(item), 1);

    this.catalogue.push(item);
    this.catalogue.sort((a: Book, b: Book) => {
      if (a.id < b.id) return -1;
      else if (a.id > b.id) return 1;
      return 0;
    });
  }
}
