import { NavItemProps } from "../../interfaces";
import {
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaUser,
  FaDotCircle,
  FaBookmark,
} from "react-icons/fa";

export const navItems: NavItemProps[] = [
  {
    title: "Home",
    href: "/",
    Icon: FaHome,
  },
  {
    title: "Explore",
    href: "/explore",
    Icon: FaHashtag,
  },
  {
    title: "Notifications",
    href: "/notifications",
    Icon: FaBell,
  },
  {
    title: "Messages",
    href: "/messages",
    Icon: FaEnvelope,
  },
  {
    title: "Bookmarks",
    href: "/bookmarks",
    Icon: FaBookmark,
  },
  {
    title: "Profile",
    href: "/profile",
    Icon: FaUser,
  },
  {
    title: "More",
    href: "/",
    Icon: FaDotCircle,
  },
];
