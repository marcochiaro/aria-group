type MinimumChargeProps = {
  minimumCharge: number;
};

const MinimumChargeCard: React.FC<MinimumChargeProps> = ({ minimumCharge }) => {
  const minimumChargeString = minimumCharge.toString();
  return (
    <div className="mb-32 mt-48 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-center ">
      <a className="group rounded-lg border border-transparent px-5 py-4">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Mínimo de carga{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            ${minimumChargeString}
          </span>
        </h2>
      </a>
    </div>
  );
};

export default MinimumChargeCard;
