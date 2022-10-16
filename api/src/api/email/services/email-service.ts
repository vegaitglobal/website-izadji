/**
 * email service
 */

import {readFileSync, open} from "fs"

const LOGO_URL = "\"https://i0.wp.com/izadji.rs/wp-content/uploads/2020/05/cropped-logo-1.png?fit=100%2C85&ssl=1\""

interface GenerateTemplateParams {
    url: string,
    title: string,
    description: string,
    unsubscribe_url: string
}



const generateTemplate = (props: GenerateTemplateParams) => {
    const mapValues = {
        url_placeholder: props.url, 
        title_placeholder: props.title,
        description_placeholder: props.description ,
        unsubscribe_url_placeholder: props.unsubscribe_url

    }

    
    let base_path = process.cwd()
    let index_file_path = base_path + "/assets/email/newsletter_template.htm"
    try {
        let file = readFileSync(index_file_path)
        return file.toString().replace(/\b(?:url_placeholder|title_placeholder|description_placeholder|unsubscribe_url_placeholder)\b/gi, mathced => mapValues[mathced]);
        
    } catch (err) {
        console.log(err)
    }
}


const \mailParams = (destination_email, user_email, subject, title, content) => {
    const params = { 
        url: LOGO_URL, 
        title: title, 
        description: content,
        unsubscribe_url: `${process.env['IZADJI_URL']}/api/newsletter-subscriptions/unsubscribe/${user_email}`
    };

    return {
        to: destination_email,
        from: 'Hello Izadji',
        subject: subject,
        html: generateTemplate(params)
    }
}


let mailService = {
    sendMail: async (destination_email, user_email, title, subject, content) => {

        return await strapi.plugin('email').service('email').send(mailParams(destination_email, user_email, subject, title, content));
    }
}

export default mailService;


 