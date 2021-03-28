import { Airport } from './Airport';

export class Route {
  private constructor(
    private departure: Airport,
    private destination: Airport,
  ) {}

  static fromTo(departure: Airport, destination: Airport): Route {
    return new Route(departure, destination);
  }

  asString(): string {
    return `${this.departure.asString()}-${this.destination.asString()}`;
  }
}
