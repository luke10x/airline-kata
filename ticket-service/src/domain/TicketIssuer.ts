import { FareList } from './FareList';
import { Flight } from './Flight';
import { Ticket } from './Ticket';

export class TicketIssuer {
  constructor(private fareList: FareList) {}

  issueOn(flight: Flight): Ticket {
    const fare = this.fareList.findFareFor(flight.getRoute());
    return Ticket.costing(fare);
  }
}
