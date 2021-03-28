import { Points } from './Points';

export class Fare {
  private constructor(private minorUnits: bigint) {}

  static fromString(value: string): Fare {
    if (!/^[\d]*\.\d\d$/.test(value)) {
      throw new Error('Bad fare format ' + value);
    }
    return new Fare(BigInt(parseFloat(value) * 100));
  }

  deduct(fare: Fare): Fare {
    return new Fare(this.minorUnits - fare.minorUnits);
  }

  isZero(): boolean {
    return this.minorUnits === BigInt(0);
  }

  getPoints(): Points {
    return Points.fromString(BigInt(Number(this.minorUnits) / 100).toString());
  }
}
