import { Points } from './Points';

describe('Points', () => {
  it('can be created from string', () => {
    expect((): Points => Points.fromString('100')).not.toThrow();
  });

  it('cannot be created from wrong format', () => {
    expect((): Points => Points.fromString('010')).toThrow();
    expect((): Points => Points.fromString('100.00')).toThrow();
    expect((): Points => Points.fromString('1A')).toThrow();
  });
});
