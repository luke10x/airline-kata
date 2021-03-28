import { Fare } from './Fare';
import { Route } from './Route';

export interface FareList {
  findFareFor(route: Route): Fare;
  listFare(route: Route, fare: Fare): void;
}
