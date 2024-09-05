import type { Schema, Attribute } from '@strapi/strapi';

export interface PaymentInfoPaymentInfo extends Schema.Component {
  collectionName: 'components_payment_info_payment_infos';
  info: {
    displayName: 'payment_info';
  };
  attributes: {
    Account_number: Attribute.BigInteger;
    amount: Attribute.Decimal & Attribute.Required;
    payment_method: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'payment-info.payment-info': PaymentInfoPaymentInfo;
    }
  }
}
