/**
 * contanct-form-submission controller
 */

import mailService from "../../email/services/email-service"
import { factories } from '@strapi/strapi'

const TITLE = "Novi kontakt"
const SUBJECT = "Novi kontakt"

const generateMailContent = (name, phoneNumber, text, email) => {
    return `Ime: ${name} <br/> Email: ${email} <br/> Broj telefona: ${phoneNumber} <br/> Poruka: ${text}`
  }
export default factories.createCoreController('api::contanct-form-submission.contanct-form-submission', ({strapi}) => ({
    async create(ctx) {
        const entity = strapi.entityService.create('api::contanct-form-submission.contanct-form-submission')
        console.log("submission controller")
        ctx.body = "Success";
        const {name, phone, content, email} = ctx.request.body.data
        let mailContent = generateMailContent(name, phone, content, email)
        mailService.sendMail(process.env['SMTP_CONTACT_EMAIL'], email, TITLE, SUBJECT, mailContent)
        
    }
}));
