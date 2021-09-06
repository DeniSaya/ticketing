import { Publisher, Subjects, TicketUpdatedEvent } from '@3inplm/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
