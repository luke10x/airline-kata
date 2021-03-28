export class Points {
  private constructor(private value: bigint) {}

  static fromString(value: string): Points {
    if (value !== BigInt(value).toString()) {
      throw new Error('Bad points format');
    }
    return new Points(BigInt(value));
  }
}
