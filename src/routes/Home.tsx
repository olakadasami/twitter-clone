// Libraries
import { v4 as uuid } from "uuid";
// Components
import NewTweetBar from "../components/Tweet/NewTweetBar";
import Tweet from "../components/Tweet/Tweet";
// Hooks
import { useTweetStore } from "../store/tweetStore"; // zustand store
// Static files
import Image from "../assets/react.svg";

// Default component
function Home() {
  // Get tweets from the zustand store
  const tweets = useTweetStore((state) => state.tweets);

  return (
    <section className="flex flex-col py-10">
      <h1 className="font-semibold text-3xl mb-4 px-4">Home</h1>
      <NewTweetBar userImage={Image} />
      {tweets.map((tweet) => {
        return (
          <Tweet
            key={uuid()} // Generate unique uuid for each tweet
            name={tweet.name}
            tweetMessage={tweet.tweetMessage}
            username={tweet.username}
            userImageUrl={tweet.userImageUrl}
          />
        );
      })}
    </section>
  );
}

export default Home;
