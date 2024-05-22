import { FormSchema } from "@/app/page";
import nodemailer from "nodemailer";
import * as z from "zod";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_AUTH_USER,
    pass: process.env.NEXT_PUBLIC_AUTH_PASS,
  },
});

export const sendEmail = async (req: z.infer<typeof FormSchema>) => {
  const mailData = {
    to: process.env.NEXT_PUBLIC_AUTH_USER,
    subject: `[TEST] ${req.subject}`,
    from: req.email,
    html: `
      <h1>${req.subject}</h1>
      <div>${req.message}</div>
      </br>
      <p>보낸사람: ${req.name}</p>
    `,
  };

  return transporter.sendMail(mailData);
};
