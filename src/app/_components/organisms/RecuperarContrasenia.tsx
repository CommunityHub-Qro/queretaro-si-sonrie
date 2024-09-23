import React, { useState } from 'react';
import sendEmail from '../hooks/sendEmail';
import { Decorations } from '../atoms/Decorations';

const RecuperarContrasenia = () => {
  const [email, setEmail] = useState('')
  
  function handleSubmit(e: any) {
    e.preventDefault();

    sendEmail();
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='flex h-screen justify-center items-center flex-col gap-10'>
      <p>Ingresa su correo electrónico para recuperar su contraseña</p>
      <input className="w-3/5 input p-2" placeholder='Email' type="text" onChange={(u) => setEmail(u.target.value)} value={email}/>
      <button type="submit" className='w-32 drop-shadow-md bg-third rounded-full text-center hover:bg-[rgb(255,40,40)] py-2 h-10 items-center text-white'>
        Enviar
      </button>
      <Decorations color1="fifth" color2="third" color3='fourth' className={'top-[10rem] right-[10rem]'} rotation='45' />
      <Decorations color1="fifth" color2="fourth" color3='third' className={'top-[30rem] left-[10rem]'} rotation='45' />
    </form>
  );
}

export default RecuperarContrasenia;