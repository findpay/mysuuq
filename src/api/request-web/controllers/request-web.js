'use strict';

/**
 * request-web controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::request-web.request-web');
