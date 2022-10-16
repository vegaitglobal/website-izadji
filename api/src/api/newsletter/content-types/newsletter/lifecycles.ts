// ./src/api/[api-name]/content-types/[api-name]/lifecycles.ts
import  mailService from "../../../email/services/email-service"



interface SubscriptionEntity {
  id: number,
  email: string
}

const isPublished = (data) => {
  return data.publishedAt
}

async function getAllSubscriptions(){
  const subscriptions = await strapi.entityService.findMany(
    "api::newsletter-subscription.newsletter-subscription",
    {
      fields: ["email"],
      sort: {createdAt: "DESC"},
    }
  );

  return subscriptions;
}

export default {
  
  async afterUpdate(event) {

    let title = event.result.title
    let content = event.result.content
    let subject = event.result.subject
    console.log("Content: ", event.result.content)
    
    let subscriptions: [SubscriptionEntity] = await getAllSubscriptions()
    let data = event.params.data
    if(isPublished(data)) {
      subscriptions.forEach(val => mailService.sendMail(val.email, val.email, title, subject, content))
    }


  }
};
