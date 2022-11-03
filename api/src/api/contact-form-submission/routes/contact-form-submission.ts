export default {
  routes: [
    {
     method: 'POST',
     path: '/contact-form-submission',
     handler: 'contact-form-submission.onSubmit',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
