// Libraries
import { useEffect, useState } from "react";
// Icons
import { RiImage2Line } from "react-icons/ri";
import { AiOutlineFileGif } from "react-icons/ai";
import { CiFaceSmile } from "react-icons/ci";
import { TbCalendarTime } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";
// Hooks and Interfaces
import { useTweetStore } from "../../store/tweetStore";
import { TweetProps } from "../../interfaces";
import { useModalStore } from "../../store/modalStore";

// Default component
function NewTweetBar({ userImage }: { userImage: string }) {
  const [tweet, setTweet] = useState<TweetProps>();
  const [tweetMessage, setTweetMessage] = useState<string>();
  const [name, setName] = useState<string>("Your boy");
  const [username, setUsername] = useState<string>("Samuel");

  const addNewTweet = useTweetStore((state) => state.addNewTweet);
  const setTweetModalOpen = useModalStore((state) => state.setOpen);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!name || !tweetMessage || !username || !userImage) return;
    setTweet({
      name,
      tweetMessage: tweetMessage!,
      userImageUrl: userImage,
      username,
    });
    setTweetMessage("");
    // addNewTweet(tweet!);
  };

  useEffect(() => {
    if (tweet) {
      setTweetModalOpen(false);
      addNewTweet(tweet!);
    }

    // console.log(tweet);
  }, [tweet]);

  return (
    <div className="flex gap-4 p-4">
      <div className="w-1/12">
        <img className="w-full" src={userImage} alt="Profile Image" />
      </div>
      <form onSubmit={handleSubmit} className=" w-11/12 text-2xl">
        <input
          required
          value={tweetMessage}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setTweetMessage(event.target.value)
          }
          className="w-full h-20 py-2 outline-none focus:outline-none"
          placeholder="What's happening?"
        />
        <hr />
        <div className="flex py-2 items-center justify-between">
          <NewTweetActions />
          <button
            className="text-color-white bg-color-primary-blue text-xl text-center font-bold rounded-full px-4 py-2"
            type="submit"
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTweetBar;

function NewTweetActions() {
  return (
    <div className="flex gap-4 text-color-primary-blue items-center">
      <RiImage2Line />
      <AiOutlineFileGif />
      <CiFaceSmile />
      <TbCalendarTime />
      <FiMapPin />
      <div></div>
    </div>
  );
}
