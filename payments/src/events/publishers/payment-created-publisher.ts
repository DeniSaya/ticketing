import { Subjects, Publisher, PaymentCreatedEvent } from '@3inplm/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
