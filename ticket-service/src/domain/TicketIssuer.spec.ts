import { stubInterface } from 'ts-sinon';
import { Airport } from './Airport';
import { Fare } from './Fare';
import { FareList } from './FareList';
import { Flight } from './Flight';
import { FlightNumber } from './FlightNumber';
import { Route } from './Route';
import { Ticket } from './Ticket';
import { TicketIssuer } from './TicketIssuer';

describe('TicketIssuer', () => {
  const fareList = stubInterface<FareList>();
  fareList.findFareFor
    .withArgs(Route.fromTo(Airport.fromCode('JFK'), Airport.fromCode('LHR')))
    .returns(Fare.fromString('300.00'));

  const ticketIssuer = new TicketIssuer(fareList);

  describe('with flight XX4 from JFK to LHR', () => {
    const flight = Flight.withFlightNumberAndRoute(
      FlightNumber.fromCode('XX4'),
      Route.fromTo(Airport.fromCode('JFK'), Airport.fromCode('LHR')),
    );

    it('issues ticket for a flight', () => {
      expect((): Ticket => ticketIssuer.issueOn(flight)).not.toThrow();
    });

    it('issues ticket with listed fare', () => {
      const ticket = ticketIssuer.issueOn(flight);
      expect(ticket).toEqual(Ticket.costing(Fare.fromString('300.00')));
    });
  });
});
