export class FlightNumber {
  private constructor(private code: string) {
    if (!/^[A-Z]{2}\d{1,4}$/.test(code)) {
      throw new Error('Bad flight number format');
    }
  }

  static fromCode(code: string): FlightNumber {
    return new FlightNumber(code);
  }
}
