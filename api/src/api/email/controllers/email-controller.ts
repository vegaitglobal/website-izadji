//import getEmailObject from '../../../../config/plugins'

import mailService from '../services/email-service'

const nodemailer = require("nodemailer");

module.exports  = {
    async postsReport(ctx) {
      try {
        
       
        let info = await mailService.sendMail()
        
    
        ctx.body = info;

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

      } catch (err) {
        ctx.badRequest("Post report controller error", { moreDetails: err });
      }
    },
  };

//export default factories.createCoreController('api::email_controller.email_controller');
 