import { Subjects, Publisher, OrderCancelledEvent } from '@3inplm/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
