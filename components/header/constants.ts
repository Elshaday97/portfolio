import { ISocialLink } from "./types";
import LinkedIn from "../../public/icons/linkedin.svg";
import Twitter from "../../public/icons/twitter.svg";
import GitLab from "../../public/icons/gitlab.svg";
import GitHub from "../../public/icons/github.svg";
import Medium from "../../public/icons/medium.svg";

export const socials: ISocialLink[] = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/elshaday-tesfaye-ab0a511b4/",
    img: LinkedIn,
  },
  {
    label: "Twitter",
    link: "https://twitter.com/elshaday97/",
    img: Twitter,
  },
  {
    label: "GitLab",
    link: "https://gitlab.com/elshaday1/",
    img: GitLab,
  },
  {
    label: "GitHub",
    link: "https://github.com/Elshaday97/",
    img: GitHub,
  },
  {
    label: "Medium",
    link: "https://medium.com/@elshaday/",
    img: Medium,
  },
];
