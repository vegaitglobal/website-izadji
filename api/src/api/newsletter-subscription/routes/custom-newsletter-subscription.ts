module.exports = {
  routes: [
    {
      method: "GET",
      path: "/newsletter-subscriptions/get-all-subscriptions",
      handler: "newsletter-subscription.getAllSubscriptions",
    },
    {
      method: "GET",
      path: "/newsletter-subscriptions/unsubscribe/:email",
      handler: "newsletter-subscription.unsubscribe",
    },
  ],
};
