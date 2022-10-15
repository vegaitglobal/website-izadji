export default {
  routes: [
    {
      method: "GET",
      path: "/newsletter",
      handler: "newsletter.getSubscriptions",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/newsletter",
      handler: "newsletter.createSubscription",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
