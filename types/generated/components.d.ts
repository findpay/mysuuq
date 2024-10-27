import type { Schema, Attribute } from '@strapi/strapi';

export interface PricingPricing extends Schema.Component {
  collectionName: 'components_pricing_pricings';
  info: {
    displayName: 'pricing';
    description: '';
  };
  attributes: {
    region: Attribute.String & Attribute.Required;
    fee: Attribute.Component<'pricing.fee', true>;
    base_price: Attribute.Decimal;
  };
}

export interface PricingFee extends Schema.Component {
  collectionName: 'components_pricing_fees';
  info: {
    displayName: 'fee';
  };
  attributes: {
    min_weight: Attribute.Decimal;
    max_weight: Attribute.Decimal;
    price: Attribute.Decimal;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'pricing.pricing': PricingPricing;
      'pricing.fee': PricingFee;
      'payment-info.payment-info': PaymentInfoPaymentInfo;
      'order-info.order-info': OrderInfoOrderInfo;
    }
  }
}
