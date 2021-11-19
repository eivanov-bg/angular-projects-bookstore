export abstract class Entity<T> {
  protected constructor(protected props: T) {
    // No-op
  }
}
