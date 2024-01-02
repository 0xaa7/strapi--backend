module.exports = [
  "strapi::logger",
  "strapi::errors",
  //"strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: ["https://strapi-zjxa.onrender.com"],
      // Add any other cors configuration options if needed
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
