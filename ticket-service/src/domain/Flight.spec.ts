import { Airport } from './Airport';
import { Flight } from './Flight';
import { FlightNumber } from './FlightNumber';
import { Route } from './Route';

describe('Flight', () => {
  const flightNumber = FlightNumber.fromCode('XX4029');
  const route = Route.fromTo(Airport.fromCode('LHR'), Airport.fromCode('JFK'));

  it('can be build with a flight number and a route', () => {
    expect(
      (): Flight => Flight.withFlightNumberAndRoute(flightNumber, route),
    ).not.toThrow();
  });

  it('can get route', () => {
    const flight = Flight.withFlightNumberAndRoute(flightNumber, route);
    expect(flight.getRoute()).toEqual(route);
  });
});
