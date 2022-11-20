interface CardAssociationProps {
  image: string;
  nameAssociation: string;
  description: string;
  gradientStart: string;
  gradientFinish: string;
}

const CardAssociation = ({
  image,
  nameAssociation,
  description,
  gradientStart,
  gradientFinish,
}: CardAssociationProps) => {
  let classForBackgroundContainer: string = `rounded-sm min-h-[250px] flex justify-start items-start flex-col bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-[#4324BD] via-violet-200 to-red-300`;

  console.log("Start : ", gradientStart);
  console.log("Finist :", gradientFinish);

  return (
    <div className={classForBackgroundContainer}>
      <div className="inner-wraper p-4">
        <img src={image} alt="logo-association" className="h-[120px]" />
        <h2 className="text-left mt-2 font-poppins font-semibold text-slate-800 text-2xl">
          {nameAssociation}
        </h2>
        <p className="text-left text-slate-600 text-sm font-poppins">
          {description}
        </p>
        <p className="text-left text-slate-600 text-lg font-semibold font-poppins mt-2 hover:underline hover:text-slate-800 cursor-pointer">
          Get certified
        </p>
      </div>
    </div>
  );
};

export default CardAssociation;
