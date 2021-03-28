import { FlightNumber } from './FlightNumber';

describe('FlightNumber', () => {
  it('can be created from code as a string', () => {
    expect((): FlightNumber => FlightNumber.fromCode('XX4030')).not.toThrow();
    expect((): FlightNumber => FlightNumber.fromCode('XX3')).not.toThrow();
  });

  it('cannot be created with invalid code', () => {
    expect((): FlightNumber => FlightNumber.fromCode('')).toThrow();
    expect((): FlightNumber => FlightNumber.fromCode('1000XX')).toThrow();
    expect((): FlightNumber => FlightNumber.fromCode('XX')).toThrow();
  });
});
