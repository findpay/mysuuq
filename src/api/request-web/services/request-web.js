'use strict';

/**
 * request-web service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::request-web.request-web');
