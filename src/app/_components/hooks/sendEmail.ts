"use server";

import nodemailer from "nodemailer";
import { env } from "~/env";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});
const sendEmail = async (email: string) => {
  let code = Math.floor(Math.random() * 89999) + 10000;
  const info = await transporter.sendMail({
    from: '"Querétaro si sonrie"', // sender address
    to: email, // list of receivers
    subject: "Recuperar contraseña", // Subject line
    text: "Tu código para recuperar la contraseña es: " + code, // plain text body
  });

  console.log(info.messageId);
  return code.toString();
};

export default sendEmail;
