export default {
  getSubscriptions: async (ctx, next) => {
    try {
      const data = await strapi
        .service("api::newsletter.newsletter")
        .getSubscriptions();

      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("getSubscriptions controller error", { moreDetails: err });
    }
  },
  createSubscription: async (ctx, next) => {
    try {
      console.log(ctx.request.body);

      const data = await strapi
        .service("api::newsletter.newsletter")
        .createSubscription(ctx.request.body.email);

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("createSubscription controller error", {
        moreDetails: err,
      });
    }
  },
};
