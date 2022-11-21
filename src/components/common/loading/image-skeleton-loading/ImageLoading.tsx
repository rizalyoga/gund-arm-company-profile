interface TitleProps {
  title: string;
}
const ImageLoading = ({ title }: TitleProps) => {
  return (
    <div className="border border-slate-300 shadow rounded-md p-4 min-h-[250px] mx-auto">
      <div className="animate-pulse flex space-x-4 w-full h-full">
        <div className=" bg-slate-300 h-[250px] w-full grid place-content-center">
          <h1 className="font-bold text-xl">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ImageLoading;
