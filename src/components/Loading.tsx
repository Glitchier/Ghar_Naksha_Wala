import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-screen w-full fixed flex flex-col left-0 top-0 right-0 justify-center items-center gap-6 px-6 sm:px-[6vw] md:px-[8vw] lg:px-[10vw]">
      <HashLoader color="#86b9b0" />
      <p className="text-zinc-400 text-sm">Loading...</p>
    </div>
  );
};

export default Loading;
