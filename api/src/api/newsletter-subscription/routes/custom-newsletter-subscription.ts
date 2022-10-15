module.exports = {
  routes: [
    {
      method: "GET",
      path: "/newsletter-subscriptions/get-all-subscriptions",
      handler: "newsletter-subscription.getAllSubscriptions",
    },
    {
      method: "PUT",
      path: "/newsletter-subscriptions/unsubscribe",
      handler: "newsletter-subscription.unsubscribe",
    },
  ],
};
