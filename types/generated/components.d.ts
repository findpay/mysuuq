import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderInfoOrderInfo extends Schema.Component {
  collectionName: 'components_order_info_order_infos';
  info: {
    displayName: 'order_info';
  };
  attributes: {
    order_web_id: Attribute.String;
    tracking_id: Attribute.String;
  };
}

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
      'order-info.order-info': OrderInfoOrderInfo;
      'payment-info.payment-info': PaymentInfoPaymentInfo;
    }
  }
}
