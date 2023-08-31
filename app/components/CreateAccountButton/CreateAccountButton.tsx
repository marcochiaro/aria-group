import defaultEncodedMessage from "../../../utils/defaultEncodedMessage";

type CreateAccountButtonProps = {
  phoneNumber: number;
};

const CreateAccountButton: React.FC<CreateAccountButtonProps> = ({
  phoneNumber,
}) => {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-center ">
      <a
        href={`https://wa.me/549${phoneNumber}/?text=${defaultEncodedMessage}`}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Crea tu usuario{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <h3 className={`m-0 text-sm opacity-50 text-center justify-center`}>
          Envíanos un Whatsapp para crear tu usuario.
        </h3>
      </a>
    </div>
  );
};

export default CreateAccountButton;
