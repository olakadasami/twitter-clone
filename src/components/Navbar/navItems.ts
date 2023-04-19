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
    href: "/",
    Icon: FaHashtag,
  },
  {
    title: "Notifications",
    href: "/",
    Icon: FaBell,
  },
  {
    title: "Messages",
    href: "/",
    Icon: FaEnvelope,
  },
  {
    title: "Bookmarks",
    href: "/",
    Icon: FaBookmark,
  },
  {
    title: "Profile",
    href: "/",
    Icon: FaUser,
  },
  {
    title: "More",
    href: "/",
    Icon: FaDotCircle,
  },
];
