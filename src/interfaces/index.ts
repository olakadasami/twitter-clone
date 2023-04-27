import { IconType } from "react-icons";

export interface NavItemProps {
  href: string;
  title: string;
  Icon: IconType;
}

export interface ButtonProps {
  href: string;
  title: string;
}

export interface TweetProps {
  userImageUrl: string;
  name: string;
  username: string;
  tweetMessage: string;
}
