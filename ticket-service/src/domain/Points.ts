export class Points {
  private constructor(private value: bigint) {}

  static fromString(value: string): Points {
    if (BigInt(value).toString() !== value) {
      throw new Error('Bad points format');
    }
    return new Points(BigInt(value));
  }
}
