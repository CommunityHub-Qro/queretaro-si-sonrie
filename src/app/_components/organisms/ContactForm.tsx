"use client";
import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import FormLabel from "../molecules/FormLabel";
import FormHeader from "../molecules/FormHeader";
import TextArea from "../atoms/TextArea";

const ContactForm: React.FC = () => {
  const [name, setUsername] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Verificar si los campos están vacíos
    if (!name || !email || !message) {
      alert("Tu formulario está vacío");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c3fd8409-d577-4c06-ba6e-5710229a86f6",
          name: name,
          email: email,
          message: message,
        }),
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const result = await response.json();

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (result.success) {
        alert("Se ha enviado tu formulario exitosamente!");
      } else {
        alert("Algo ha ocurrido, no se pudo enviar tu formulario!");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Ocurrió un error al intentar enviar el formulario.");
    }
  }

  return (
    <div className="mx-auto w-full max-w-lg">
      <form
        className="mb-4 rounded-lg bg-white px-8 pb-8 pt-6 shadow-md"
        onSubmit={handleSubmit}
      >
        <FormHeader
          title="Contacto"
          subtitle="Ponte en contacto con nuestros especialistas"
          className="mb-4 text-center"
        />
        <FormLabel
          label="Nombre"
          name="Name"
          className="text-base text-gray-700 md:text-2xl"
        >
          <Input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Escribe tu nombre"
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border-b-4 border-b-slate-500 px-3 py-2 text-base leading-tight text-gray-700 shadow focus:outline-none md:text-2xl"
          />
        </FormLabel>
        <FormLabel
          label="Apellido"
          name="lastName"
          className="text-base text-gray-700 md:text-2xl"
        >
          <Input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Escribe tu apellido"
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border-b-4 border-b-slate-500 px-3 py-2 text-base leading-tight text-gray-700 shadow focus:outline-none md:text-2xl"
          />
        </FormLabel>
        <FormLabel
          label="Correo"
          name="email"
          className="text-base text-gray-700 md:text-2xl"
        >
          <Input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Escribe tu correo electrónico"
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border-b-4 border-b-slate-500 px-3 py-2 text-base leading-tight text-gray-700 shadow focus:outline-none md:text-2xl"
          />
        </FormLabel>
        <FormLabel
          label="Mensaje"
          name="message"
          className="text-base text-gray-700 md:text-2xl"
        >
          <TextArea
            value={message}
            onChange={handleMessageChange}
            placeholder="Escribe tu mensaje"
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border-b-4 border-b-slate-500 px-3 py-2 text-base leading-tight text-gray-700 shadow focus:outline-none md:text-2xl"
            rows={3}
            cols={50}
          />
        </FormLabel>
        <Button
          type="submit"
          className="w-full rounded bg-red-600 px-4 py-6 text-base font-bold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 md:text-2xl"
        >
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
