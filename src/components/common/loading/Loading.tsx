import LoadingAnimation from "../../../assets/loading-double-ring.svg";
const Loading = () => {
  return (
    <div className="containers absolute min-h-screen min-w-[100%]  flex justify-center items-center ">
      <img src={LoadingAnimation} alt="loading" />
    </div>
  );
};

export default Loading;
