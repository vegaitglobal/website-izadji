module.exports = {
  getSubscriptions: async () => {
    try {
      return await strapi.entityService.findMany("api::newsletter.newsletter", {
        fields: ["email"],
      });
    } catch (err) {
      return err;
    }
  },
  createSubscription: async (email) => {
    try {
      const entry = await strapi.entityService.create(
        "api::newsletter.newsletter",
        {
          data: {
            email: email,
          },
        }
      );

      return entry;
    } catch (err) {
      return err;
    }
  },
};
