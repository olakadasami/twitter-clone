import { BiMessageRounded, BiBarChart } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { TbUpload } from "react-icons/tb";

function TweetActions() {
  return (
    <div className="flex text-[40px] -translate-x-2 items-center justify-between text-gray-700">
      <BiMessageRounded className="hover:bg-gray-200 p-2 rounded-full transition-colors duration-300" />
      <AiOutlineRetweet className="hover:bg-gray-200 p-2 rounded-full transition-colors duration-300" />
      <AiOutlineHeart className="hover:bg-gray-200 p-2 rounded-full transition-colors duration-300" />
      <BiBarChart className="hover:bg-gray-200 p-2 rounded-full transition-colors duration-300" />
      <TbUpload className="hover:bg-gray-200 p-2 rounded-full transition-colors duration-300" />
      <div></div>
    </div>
  );
}
export default TweetActions;
