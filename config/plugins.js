module.exports = () => ({

   'encryptable-field': {
        enabled: true,
    },
    'strapi-plugin-moesif': {
    enabled: true,
    config: {
      moesif: {
        identifyUser: function (req, res) {
            if (req.state && req.state.user) {
              return String(req.state.user.id);
            }
            return undefined;
          },// return true if the data should be skipped
          skip: function (req, res) {
            // don't log non JSON types
            return (
              res.headers && !res.headers["Content-Type"].includes("application/json")
            );
          }
          
          //send all data regardless of type
          
      }
    },
  },
  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },

});
