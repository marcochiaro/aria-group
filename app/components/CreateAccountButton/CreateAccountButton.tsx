import { FaWhatsapp } from "react-icons/fa";
import defaultEncodedMessage from "../../../utils/defaultEncodedMessage";

type CreateAccountButtonProps = {
  phoneNumber: number;
};

const CreateAccountButton: React.FC<CreateAccountButtonProps> = ({
  phoneNumber,
}) => {
  return (
    <div className="mt-16 grid text-center lg:max-w-xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-center ">
      <a
        href={`https://wa.me/549${phoneNumber}/?text=${defaultEncodedMessage}`}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colorsborder-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-2 text-2xl font-semibold lg:w-100`}>
          CREA TU USUARIO{" "}
          <FaWhatsapp className="text-3xl inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
        </h2>
        <h3
          className={`pt-2 m-0 text-lg opacity-50 text-center justify-center`}
        >
          Envíanos un Whatsapp para crear tu usuario.
        </h3>
      </a>
    </div>
  );
};

export default CreateAccountButton;
