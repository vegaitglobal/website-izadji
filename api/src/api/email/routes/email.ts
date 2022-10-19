module.exports = {
    routes: [
      {
        method: "GET",
        path: "/posts-report",
        handler: "email-controller.postsReport",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };