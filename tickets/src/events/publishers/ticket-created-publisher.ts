import { Publisher, Subjects, TicketCreatedEvent } from '@3inplm/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
