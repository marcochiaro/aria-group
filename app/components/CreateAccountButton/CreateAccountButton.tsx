"use client";
import { FaWhatsapp } from "react-icons/fa";
import defaultEncodedMessage from "../../../utils/defaultEncodedMessage";
import { useEffect } from "react";

// Declaración global para la propiedad beam en el objeto Window
declare global {
  interface Window {
     beam: (eventName: string, eventData?: any) => void;
   }
 }

type CreateAccountButtonProps = {
  phoneNumber: number;
  prefix: number;
};

const CreateAccountButton: React.FC<CreateAccountButtonProps> = ({
  phoneNumber,
  prefix,
}) => {
   useEffect(() => {
     const handleClick = () => {
       // Envía el evento personalizado a Beam Analytics cuando se hace clic en el botón
       window.beam("Button Clicked", {
         phoneNumber: phoneNumber,
         timestamp: new Date().toISOString(),
       });
     };

     const button = document.getElementById("createAccountButton");
     if (button) {
       button.addEventListener("click", handleClick);
     }

     return () => {
       if (button) {
         button.removeEventListener("click", handleClick);
       }
     };
   }, [phoneNumber]);

  return (
    <div className="my-4 grid text-center lg:max-w-xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-center">
      <a
        href={`https://wa.me/${prefix}${phoneNumber}/?text=${defaultEncodedMessage}`}
        className="group rounded-lg border border-transparent px-5 py-2 transition-colors border-zinc-300 hover:bg-[#663eb0]"
        target="_blank"
        rel="noopener noreferrer"
        id="createAccountButton"
      >
        <h2
          className={`text-l text-zinc-300 font-semibold lg:w-100  hover:text-black`}
        >
          <FaWhatsapp className="text-5xl inline-block transition-transform text-zinc-300 group-hover:translate-x-1 motion-reduce:transform-none" />{" "}
          CREA TU USUARIO
        </h2>
      </a>
    </div>
  );
};

export default CreateAccountButton;
