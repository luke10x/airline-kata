import { Fare } from '../domain/Fare';
import { FareList } from '../domain/FareList';
import { Route } from '../domain/Route';

export class MemoryFareList implements FareList {
  private fares: { [id: string]: Fare } = {};

  listFare(route: Route, fare: Fare): void {
    this.fares[route.asString()] = fare;
  }

  findFareFor(route: Route): Fare {
    const fare: Fare = this.fares[route.asString()];
    if (!fare) {
      throw new Error(`Cannot find fare: ${route.asString()}`);
    }
    return fare;
  }
}
