export default ({ env }) => ({
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST'),
          port: env('SMTP_PORT'),
          secure: true,
          auth: {
            user: env('SMTP_APPLICATION_EMAIL'),
            pass: env('SMTP_APPLICATION_PASSWORD'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: env('SMTP_APPLICATION_EMAIL'),
          defaultReplyTo: env('SMTP_APPLICATION_EMAIL'),
        },
      },
    },

  
  });