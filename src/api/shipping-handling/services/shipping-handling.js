'use strict';

/**
 * shipping-handling service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shipping-handling.shipping-handling');
