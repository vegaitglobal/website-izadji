/**
 * email service
 */

import {readFileSync, open} from "fs"


interface GenerateTemplateParams {
    url: string,
    title: string,
    description: string
}



const generateTemplate = (props: GenerateTemplateParams) => {
    const mapValues = {
        url_placeholder: props.url, //"\"https://i.ibb.co/rvP1qWs/logo.png\"",
        title_placeholder: props.title, //"Something",
        description_placeholder: props.description //"Something"
    }

    console.log(mapValues)
    
    let base_path = process.cwd()
    let index_file_path = base_path + "/assets/email/newsletter_template.htm"
    try {
        let file = readFileSync(index_file_path)
        return file.toString().replace(/\b(?:url_placeholder|title_placeholder|description_placeholder)\b/gi, mathced => mapValues[mathced]);
        
    } catch (err) {
        console.log(err)
    }
}


const mailParams = () => {
    const params = { 
        url: "\"https://i.ibb.co/rvP1qWs/logo.png\"", 
        title: "Something", 
        description: "Something"
    };

    return {
        to: "bojanvjc@gmail.com", // iz param
        from: 'Hello Izadji',
        subject: 'Hello Bojana',
        text: 'Hello world, we are testing your email sender.',
        html: generateTemplate(params)
    }
}

//TODO: izvuci title, dscription i setovati u html. Setovati url slike
let mailService = {
    sendMail: async () => {
        
        return await strapi.plugin('email').service('email').send(mailParams());
    }
}

export default mailService;


 