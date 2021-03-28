import { Fare } from './Fare';
import { Points } from './Points';

export class Ticket {
  private constructor(
    private outstandingFare: Fare,
    private revenueFare: Fare,
  ) {}

  static costing(fare: Fare): Ticket {
    return new Ticket(fare, fare);
  }

  pay(fare: Fare): void {
    this.outstandingFare = this.outstandingFare.deduct(fare);
  }

  isCompletelyPaid(): boolean {
    return this.outstandingFare.isZero();
  }

  getPoints(): Points {
    return this.revenueFare.getPoints();
  }
}
