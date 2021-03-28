import { Fare } from './Fare';
import { Points } from './Points';

describe('Fare', () => {
  it('can be created from a string', () => {
    expect((): Fare => Fare.fromString('100.00')).not.toThrow();
  });

  it('cannot be created from wrong format', () => {
    expect((): Fare => Fare.fromString('100')).toThrow();
    expect((): Fare => Fare.fromString('100.000')).toThrow();
    expect((): Fare => Fare.fromString('100.00.00')).toThrow();
  });

  it('can deduct an amount', () => {
    const minuend = Fare.fromString('100.00');
    const subtrahend = Fare.fromString('10.00');
    const difference = minuend.deduct(subtrahend);
    expect(difference).toEqual(Fare.fromString('90.00'));
  });

  it('knows when it is zero', () => {
    const fare = Fare.fromString('0.00');
    expect(fare.isZero()).toBeTruthy();
  });

  it('is not zero when it has value', () => {
    const fare = Fare.fromString('100.00');
    expect(fare.isZero()).toBeFalsy();
  });

  it('calculates points', () => {
    const fare = Fare.fromString('100.00');
    expect(fare.getPoints()).toEqual(Points.fromString('100'));
  });
});
