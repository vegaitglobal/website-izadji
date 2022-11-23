/**
 * A set of functions called "actions" for `volunteer-form-submission`
 */
import mailService from "../../email/services/email"
import * as EmailValidator from "email-validator" 
import * as PohneNumberValidator from "validate-phone-number-node-js"

const TITLE = "Nova prijava za volontiranje"
const SUBJECT = "Nova prijava za volontiranje"

const generateMailContent = (name, phoneNumber, text, email) => {
  return `Ime: ${name} <br/> Email: ${email} <br/> Broj telefona: ${phoneNumber} <br/> Poruka: ${text}`
}

const validateFormData = (ctx, email, phone) => {
  let isValid = true;
  if (!EmailValidator.validate(email)) {
    ctx.body = "Invalid email format";
    ctx.status = 400;
    isValid = false;
  }

  if (!PohneNumberValidator.validate(phone)) {
    ctx.body = "Invalid phone number";
    ctx.status = 400;
    isValid = false;
  }

  return isValid;
}

export default {
  onSubmit: async (ctx, next) => {
    try {
      const {name, phone, message, email} = ctx.request.body
      if (!validateFormData(ctx, email, phone)) {
        return;
      }

      let mailContent = generateMailContent(name, phone, message, email);
      mailService.sendMail(process.env['SMTP_CONTACT_EMAIL'], email, TITLE, SUBJECT, mailContent);

      ctx.body = 'Success';
    } catch (err) {
      ctx.body = err;
    }
  }
};
