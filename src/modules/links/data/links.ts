import { FileUser, Github, Instagram, Linkedin } from "lucide-react";
import type { Link } from "../types";

export const links: Link[] = [
  {
    title: 'Github',
    link: "https://github.com/mathensousaa",
    icon: Github
  },
  {
    title: 'Linkedin',
    link: "https://www.linkedin.com/in/matheus-de-sousa/",
    icon: Linkedin
  },
  {
    title: 'Instagram',
    link: "https://instagram.com/mathensousaa",
    icon: Instagram
  },
  {
    title: 'CV',
    link: "",
    icon: FileUser,
  }
]