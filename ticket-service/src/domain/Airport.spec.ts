import { Airport } from './Airport';

describe('Airport', () => {
  it('can be created from code as a string', () => {
    expect((): Airport => Airport.fromCode('JFK')).not.toThrow();
  });

  it('cannot be created with invalid code', () => {
    expect(() => Airport.fromCode('')).toThrow();
    expect(() => Airport.fromCode('123')).toThrow();
    expect(() => Airport.fromCode('BABY')).toThrow();
  });

  it('can be represented as string', () => {
    const airport = Airport.fromCode('JFK');
    expect(airport.asString()).toEqual('JFK');
  });
});
