'use server';
import axios from 'axios';

const API_KEY = process.env.MAILCHIMP_API_KEY;
const mailchimpInstance = process.env.MAILCHIMP_INSTANCE;
const listUniqueId = process.env.MAILCHIMP_LIST_ID;

export async function submitEmail(email) {
  try {
    const response = await axios.post(
      `https://${mailchimpInstance}.api.mailchimp.com/3.0/lists/${listUniqueId}/members`,
      {
        email_address: email,
        status: 'subscribed',
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    if (response.status === 200) {
      return { success: true, message: 'Email added to waitlist!' };
    } else {
      return { success: false, message: 'Failed to add email to waitlist' };
    }
  } catch (error) {
    console.log(error.response);
    if (error.response.data.detail) {
      return { success: false, message: error.response.data.detail };
    }
    return { success: false, message: error.message };
  }
}
