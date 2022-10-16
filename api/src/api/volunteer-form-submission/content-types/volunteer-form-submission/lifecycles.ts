
import  mailService from "../../../email/services/email-service"

const TITLE = "Prijava na projekat"
const SUBJECT = "Prijava na projekat"

const generateMailContent = (name, phoneNumber, text, email) => {
  return `Ime: ${name} <br/> Email: ${email} <br/> Broj telefona: ${phoneNumber} <br/> Poruka: ${text}`
}


export default {
  
  async afterCreate(event) {

    let email = event.result.email
    let phoneNumber = event.result.phoneNumber
    let name = event.result.name
    let text = event.result.text

    let mailContent = generateMailContent(name, phoneNumber, text, email)
  
    mailService.sendMail(process.env['SMTP_CONTACT_EMAIL'], email, TITLE, SUBJECT, mailContent)
  }
};