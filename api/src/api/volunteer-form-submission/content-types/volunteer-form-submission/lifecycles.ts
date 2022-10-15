// ./src/api/[api-name]/content-types/[api-name]/lifecycles.ts
import  mailService from "../../../email/services/email-service"

const TITLE = "Prijava na projekat"
const SUBJECT = "Prijava na projekat"

const generateMailContent = (name, phoneNumber, text) => {
  return `Ime: ${name} <br/> Broj telefona: ${phoneNumber} <br/> Poruka: ${text}`
}

export default {
  
  async afterCreate(event) {

    let email = event.result.email
    let phoneNumber = event.result.phoneNumber
    let name = event.result.name
    let text = event.result.text

    let mailContent = generateMailContent(name, phoneNumber, text)
    console.log("Email: ", email)

    mailService.sendMail(email, TITLE, SUBJECT, mailContent)
  }
};