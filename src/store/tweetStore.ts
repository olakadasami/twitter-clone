import { create } from "zustand";
import { TweetProps } from "../interfaces";
import { tweetList } from "../components/Home/tweetList";

interface TweetStoreProps {
  tweets: TweetProps[];
  addNewTweet: (tweet: TweetProps) => void;
}

export const useTweetStore = create<TweetStoreProps>()((set) => ({
  tweets: tweetList,
  addNewTweet: (tweet) =>
    set((state) => ({
      tweets: [tweet, ...state.tweets],
    })),
}));
