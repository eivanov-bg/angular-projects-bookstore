export class BookSearchConditions {
  /**
   * Create empty search conditions (to fetch all books)
   */
  static createEmpty(): BookSearchConditions {
    return new BookSearchConditions();
  }

  constructor(public title?){
    // No-Op
  }

  /**
   * Check if the object is empty
   */
  isEmpty(): boolean {
    return this.title === undefined;
  }
}
