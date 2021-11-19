import { Book, IBookProps } from '@bookstore/core/types/entities';

export class BookMapper {
  static toDomain(value: IBookProps): Book {
    return Book.createBook(value);
  }

  static toPersistence(book: Book): IBookProps {
    return undefined;
  }
}
