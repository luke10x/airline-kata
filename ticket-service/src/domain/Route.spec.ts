import { Airport } from './Airport';
import { Route } from './Route';

describe('Route', () => {
  it('can be created from departure and destination', () => {
    expect(
      (): Route =>
        Route.fromTo(Airport.fromCode('JFK'), Airport.fromCode('LHR')),
    ).not.toThrow();
  });

  it('can be represented as string', () => {
    const route = Route.fromTo(
      Airport.fromCode('JFK'),
      Airport.fromCode('LHR'),
    );
    expect(route.asString()).toEqual('JFK-LHR');
  });
});
