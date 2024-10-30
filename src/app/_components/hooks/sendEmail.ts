"use server";
import { newUser } from "./../../../server/api/routers/newUser";

import nodemailer from "nodemailer";
import { env } from "~/env";
import { api } from "~/trpc/server";

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
  const user = await api.newUser.getUser({ name: email });
  if (user) {
    const info = await transporter.sendMail({
      from: '"Querétaro si sonrie"', // sender address
      to: email, // list of receivers
      subject: "Recuperar contraseña", // Subject line
      text: "Tu código para recuperar la contraseña es: " + code, // plain text body
    });

    console.log(info.messageId);
    return code.toString();
  } else {
    throw new Error("email no se encuentra registrado");
  }
};

export default sendEmail;
