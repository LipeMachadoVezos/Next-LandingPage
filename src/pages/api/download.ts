import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

// Define response data type
type Data = { message?: string; error?: string; };

// Email validation schema
const EmailSchema = z
  .string()
  .email({ message: "Coloque um email válido!" });

// Subscription handler function
export default async function subscribeHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // 1. Validate email address
  const emailValidation = EmailSchema.safeParse(req.body.email);
  if (!emailValidation.success) {
    return res.status(400).json({ error: "Coloque um email válido!" });
  }

  // 2. Retrieve Mailchimp credentials from environment variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  // 3. Construct Mailchimp API request URL
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  // 4. Prepare request data
  const data = {
    email_address: emailValidation.data,
    status: "subscribed",
  };

  // 5. Set request headers
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `api_key ${API_KEY}`,
    },
  };

  // 6. Send POST request to Mailchimp API
  try {
    const response = await axios.post(url, data, options);
    if (response.status == 200) {
      return res.status(201).json({ message: "Parabéns, você está baixando sua amostra!" });
    }
  } catch (error) {

    if (axios.isAxiosError(error)) {
      console.error(
        `${error.response?.status}`,
        `${error.response?.data.title}`,
        `${error.response?.data.detail}`
      );

      if (error.response?.data.title == "Member Exists") {
        return res.status(400).json({
          error: "Este email já baixou a amostra!",
        });
      }
    }

    return res.status(500).json({
      error:
        "Ops, ocorreu um erro ao tentar baixar a amostra do livro.",
    });
  }
};