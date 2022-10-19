import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::newsletter-subscription.newsletter-subscription",
  ({ strapi }) => ({
    async getAllSubscriptions(ctx) {
      try {
        const subscriptions = await strapi.entityService.findMany(
          "api::newsletter-subscription.newsletter-subscription",
          {
            fields: ["email"],
            sort: { createdAt: "DESC" },
          }
        );

        ctx.body = subscriptions;
      } catch (err) {
        ctx.badRequest("newsletter-subscription.getAllSubscriptions error", {
          moreDetails: err,
        });
      }
    },
    async unsubscribe(ctx) {
      try {
        const { email } = ctx.params;

        //fetch entity by email
        const subscriptions = await strapi.entityService.findMany(
          "api::newsletter-subscription.newsletter-subscription",
          {
            filters: { email: email },
          }
        );

        if (subscriptions.length === 0) {
          throw new Error("Email not found");
        }

        const subscription = await strapi.entityService.delete(
          "api::newsletter-subscription.newsletter-subscription",
          subscriptions[0].id
        );

        ctx.body = "Successfully unsubscribed.";
      } catch (err) {
        ctx.redirect("/")
      }
    },
  })
);
