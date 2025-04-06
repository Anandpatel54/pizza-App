import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv";

dotenv.config();
 
export const client = new MailtrapClient({token: process.env.MAILTRAP_API_TOKEN! });

export const sender = {
  address: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};