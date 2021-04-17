import expect from 'expect';
import { Given, When, Then, defineParameterType } from '@cucumber/cucumber';
import { MemoryFareList } from '../adapter/MemoryFareList';
import { Airport } from '../domain/Airport';
import { Fare } from '../domain/Fare';
import { FareList } from '../domain/FareList';
import { Flight } from '../domain/Flight';
import { FlightNumber } from '../domain/FlightNumber';
import { Route } from '../domain/Route';
import { Ticket } from '../domain/Ticket';
import { TicketIssuer } from '../domain/TicketIssuer';
import { Points } from '../domain/Points';

let flight: Flight;
const fareList: FareList = new MemoryFareList();
let ticket: Ticket;

defineParameterType({
  name: 'FlightNumber',
  regexp: /"(.*)"/,
  transformer: (code: string): FlightNumber => FlightNumber.fromCode(code),
});

defineParameterType({
  name: 'Airport',
  regexp: /"(.*)"/,
  transformer: (code: string): Airport => Airport.fromCode(code),
});

defineParameterType({
  name: 'Fare',
  regexp: /(.*)/,
  transformer: (value: string): Fare => Fare.fromString(value),
});

defineParameterType({
  name: 'Points',
  regexp: /(\d*)/,
  transformer: (value: string): Points => Points.fromString(value),
});

Given(
  'a flight {FlightNumber} flies from the {Airport} to {Airport} route',
  (flightNumber: FlightNumber, departure: Airport, destination: Airport) => {
    const route = Route.fromTo(departure, destination);
    flight = Flight.withFlightNumberAndRoute(flightNumber, route);
  },
);

Given(
  'the current listed fare for the {Airport} to {Airport} is ${Fare}',
  (departure: Airport, destination: Airport, fare: Fare) => {
    const route = Route.fromTo(departure, destination);
    fareList.listFare(route, fare);
  },
);

When('I am issued a ticket on a flight {FlightNumber}', (_: never) => {
  const ticketIssuer = new TicketIssuer(fareList);
  ticket = ticketIssuer.issueOn(flight);
});

When('I pay ${Fare} cash for the ticket', (fare: Fare) => {
  ticket.pay(fare);
});

Then('the ticket should be completely paid', () => {
  expect(ticket.isCompletelyPaid()).toBeTruthy();
});

Then('the ticket should be worth {Points} loyalty points', (points: Points) => {
  expect(ticket.getPoints()).toEqual(points);
});
