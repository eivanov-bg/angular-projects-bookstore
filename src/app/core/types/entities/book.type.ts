import { Entity } from '@bookstore/core/types/base';
import { generateUUID } from '@bookstore/core/shared/utils';

export interface IBookProps {
  ISBN: string;
  description: string;
  authors: string[];
  title: string;
  price: number;
  publisher: string;
  publish_year: number;
  genre: string;
  pages: number;
  weight: number;
  edition: string;
  images: string[];
  annotation: string;
}

export class Book extends Entity<IBookProps> {
  private constructor(props: IBookProps) {
    super(props);
  }

  /**
   * Method factory to create book instances
   */
  public static createBook(props: IBookProps): Book {
    // ToDo: Validate props here

    if (!props.ISBN) {
      props.ISBN = generateUUID();
    }

    return new Book(props);
  }

  isEmpty(): boolean {
    return !(this.title && this.title.length > 0);
  }

  get title(): string {
    return this.props.title;
  }

  get ISBN(): string {
    return this.props.ISBN;
  }

  get description(): string {
    return this.props.description;
  }

  get authors(): string[] {
    return this.props.authors;
  }

  get price(): number {
    return this.props.price;
  }

  get publisher(): string {
    return this.props.publisher;
  }

  get publish_year(): number {
    return this.props.publish_year;
  }

  get genre(): string {
    return this.props.genre;
  }

  get pages(): number {
    return this.props.pages;
  }

  get weight(): number {
    return this.props.weight;
  }

  get edition(): string {
    return this.props.edition;
  }

  get images(): string[] {
    return this.props.images;
  }

  get annotation(): string {
    return this.props.annotation;
  }
}
