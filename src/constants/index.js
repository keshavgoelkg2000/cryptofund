import {
  dashboard,
  newCampaign,
  ownCampaign,
  withdraw
} from "../assets";

export const navlinks = [
  {
    name: "Dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "Campaign",
    imgUrl: newCampaign,
    link: "/create-campaign",
  },
  {
    name: "Profile",
    imgUrl: ownCampaign,
    link: "/profile",
  },

  {
    name: "Token Conversion",
    imgUrl: withdraw,
    link: "/tokenswap",
  },
];
