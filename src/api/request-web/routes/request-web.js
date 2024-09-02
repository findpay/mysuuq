'use strict';

/**
 * request-web router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::request-web.request-web');
