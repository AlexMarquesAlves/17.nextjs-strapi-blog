"use strict";

const axios = require("axios");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      axios.post(
        "https://api.vercel.com/v1/integrations/deploy/prj_os6LpEOFFZ62raj1frgJLnHCOqRX/5fJ9lhpYaD"
      );
    },

    async afterUpdate(result, params, data) {
      axios.post(
        "https://api.vercel.com/v1/integrations/deploy/prj_os6LpEOFFZ62raj1frgJLnHCOqRX/5fJ9lhpYaD"
      );
    },
  },
};
