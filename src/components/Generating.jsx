import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base text-center`}
    >
      <img className="w-5 h-5 mr-4 animate-spin" src={loading} alt="Loading" />
      Bringing Ideas to Life
    </div>
  );
};

export default Generating;
