import { FlightNumber } from './FlightNumber';
import { Route } from './Route';

export class Flight {
  private constructor(
    private flightNumber: FlightNumber,
    private route: Route,
  ) {}

  static withFlightNumberAndRoute(
    flightNumber: FlightNumber,
    route: Route,
  ): Flight {
    return new Flight(flightNumber, route);
  }

  getRoute(): Route {
    return this.route;
  }
}
