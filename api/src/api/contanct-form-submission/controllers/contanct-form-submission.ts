/**
 * contanct-form-submission controller
 */

import mailService from "../../email/services/email-service"
import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::contanct-form-submission.contanct-form-submission', ({strapi}) => ({
    async create(ctx) {
        const entity = strapi.entityService.create('api::contanct-form-submission.contanct-form-submission')
        console.log("submission controller")
        ctx.body = "Hello";
        const {name, phone, content, email} = ctx.request.body.data
        console.log(phone)
        
    }
}));
