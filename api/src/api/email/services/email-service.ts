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

    console.log(mapValues)
    
    let base_path = process.cwd()
    let index_file_path = base_path + "/assets/email/newsletter_template.htm"
    try {
        let file = readFileSync(index_file_path)
        return file.toString().replace(/\b(?:url_placeholder|title_placeholder|description_placeholder|unsubscribe_url_placeholder)\b/gi, mathced => mapValues[mathced]);
        
    } catch (err) {
        console.log(err)
    }
}


const mailParams = (email, subject, title, content) => {
    const params = { 
        url: LOGO_URL, 
        title: title, 
        description: content,
        unsubscribe_url: "http://localhost:1337/api/newsletter-subscriptions/unsubscribe/" + email
    };

    return {
        to: email, // iz param
        from: 'Hello Izadji',
        subject: subject,
        html: generateTemplate(params)
    }
}

//TODO: izvuci title, dscription i setovati u html. Setovati url slike
let mailService = {
    sendMail: async (email, title, subject, content) => {
        
        return await strapi.plugin('email').service('email').send(mailParams(email, subject, title, content));
    }
}

export default mailService;


 