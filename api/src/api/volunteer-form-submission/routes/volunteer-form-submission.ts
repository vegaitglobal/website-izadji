export default {
  routes: [
    {
     method: 'POST',
     path: '/volunteer-form-submission',
     handler: 'volunteer-form-submission.onSubmit',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
