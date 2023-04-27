import { TweetProps } from "../../interfaces";
import TweetActions from "./TweetActions";

function Tweet({ userImageUrl, name, username, tweetMessage }: TweetProps) {
  return (
    <section className="text-xl flex gap-4 p-4 hover:bg-gray-100 transition-colors duration-400">
      <div className="w-1/12 h-20 rounded-full">
        <img
          className="w-full h-full object-contain"
          src={userImageUrl}
          alt={`${username} Image`}
        />
      </div>
      <div className="w-11/12 mb-2">
        <div className="flex gap-2 items-center">
          <p className="font-semibold">{name}</p>
          <p className="text-color-grey">@{username}</p>
        </div>
        <div className="mb-2">{tweetMessage}</div>
        <TweetActions />
      </div>
    </section>
  );
}

export default Tweet;
