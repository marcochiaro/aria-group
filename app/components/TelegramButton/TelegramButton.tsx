import { FaTelegram } from "react-icons/fa";

type CreateAccountButtonProps = {
  telegramAccount: string;
};

const bonification: number = 5000;

const TelegramButton: React.FC<CreateAccountButtonProps> = ({
  telegramAccount,
}) => {
  return (
    <div className="mt-16 grid text-center lg:max-w-xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-center ">
      <a
        href={`https://t.me/${telegramAccount}`}
        className=" animate-pulse border-x-purple-200 border-y-purple-400 group rounded-lg border border-solid px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 "
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-2 text-2xl font-semibold lg:w-100`}>
          TELEGRAM
          <FaTelegram className="m-2 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-2xl" />
        </h2>
        <h3
          className={`text-white font-bold m-0 text-lg ring-opacity-10 text-center justify-center`}
        >
          Registrate por Telegram y obtene una{" "}
          <p className="text-violet-500 text-2xl">
            bonificacion de ${bonification}
          </p>{" "}
          en tu primer carga.
        </h3>
      </a>
    </div>
  );
};

export default TelegramButton;
