import { Fare } from './Fare';
import { Points } from './Points';
import { Ticket } from './Ticket';

describe('Ticket', () => {
  it('can be created by cost', () => {
    const fare = Fare.fromString('100.00');
    expect((): Ticket => Ticket.costing(fare)).not.toThrow();
  });

  describe('costing $100', () => {
    const fare = Fare.fromString('100.00');

    let ticket: Ticket;
    beforeEach(() => (ticket = Ticket.costing(fare)));

    it('can be paid', () => {
      expect(() => ticket.pay(fare)).not.toThrow();
    });

    it('is not completely paid initially', () => {
      expect(ticket.isCompletelyPaid()).toBeFalsy();
    });

    it('can be paid completely', () => {
      ticket.pay(fare);
      expect(ticket.isCompletelyPaid()).toBeTruthy();
    });

    it('gets points from original fare', () => {
      ticket.pay(Fare.fromString('50.00'));
      expect(ticket.getPoints()).toEqual(Points.fromString('100'));
    });
  });
});
