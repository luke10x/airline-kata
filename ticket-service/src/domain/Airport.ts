export class Airport {
  private constructor(private code: string) {
    if (!/^[A-Z]{3}$/.test(code)) {
      throw new Error('Bad airport code');
    }
  }

  static fromCode(code: string): Airport {
    return new Airport(code);
  }

  asString(): string {
    return this.code;
  }
}
