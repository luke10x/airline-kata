import { Fare } from './Fare';
import { Route } from './Route';

export interface FareList {
  listFare(route: Route, fare: Fare): void;
  findFareFor(route: Route): Fare;
}
