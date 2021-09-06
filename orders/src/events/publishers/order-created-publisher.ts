import { Publisher, OrderCreatedEvent, Subjects } from '@3inplm/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
