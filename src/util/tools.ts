import htmlIcon from "@assets/Icon/html.svg";
import cssIcon from "@assets/Icon/css.svg";
import antdIcon from "@assets/Icon/antd.svg";
import tsxIcon from "@assets/Icon/tsx.svg";
import gitIcon from "@assets/Icon/git.svg";
import githubIcon from "@assets/Icon/github.svg";
import gitlabIcon from "@assets/Icon/gitlab.svg";
import jsIcon from "@assets/Icon/js.svg";
import nextjsIcon from "@assets/Icon/nextjs.svg";
import reactIcon from "@assets/Icon/react.svg";
import reactNativeIcon from "@assets/Icon/react.svg";
import yarnIcon from "@assets/Icon/yarn.svg";
import reactRouterDomIcon from "@assets/Icon/reactRouterDom.svg";
import supabaseIcon from "@assets/Icon/supabase.webp";
import vueIcon from "@assets/Icon/vue.svg";
import lineIcon from "@assets/Icon/line.svg";

export interface ITools {
  title: string;
  image: string;
  link: string;
}

export const html = {
  title: "HTML",
  image: htmlIcon,
  link: "",
};

export const css = {
  title: "CSS",
  image: cssIcon,
  link: "",
};

export const js = {
  title: "JavaScript",
  image: jsIcon,
  link: "",
};

export const ts = {
  title: "TypeScript",
  image: tsxIcon,
  link: "",
};

export const yarn = {
  title: "Yarn",
  image: yarnIcon,
  link: "",
};

export const react = {
  title: "React",
  image: reactIcon,
  link: "",
};

export const vue = {
  title: "Vue",
  image: vueIcon,
  link: "",
};

export const reactNative = {
  title: "React Native",
  image: reactNativeIcon,
  link: "",
};

export const next = {
  title: "NextJs",
  image: nextjsIcon,
  link: "",
};

export const git = {
  title: "Git",
  image: gitIcon,
  link: "",
};

export const github = {
  title: "GitHub",
  image: githubIcon,
  link: "",
};

export const gitlab = {
  title: "GitLab",
  image: gitlabIcon,
  link: "",
};

export const antd = {
  title: "Ant Design",
  image: antdIcon,
  link: "",
};

export const reactRouter = {
  title: "React Router",
  image: reactRouterDomIcon,
  link: "",
};

export const supabase = {
  title: "Supabase",
  image: supabaseIcon,
  link: "",
};

export const lineliff = {
  title: "Line-Liff",
  image: lineIcon,
  link: "",
};

export const tools = [
  html,
  css,
  js,
  ts,
  yarn,
  react,
  vue,
  reactNative,
  next,
  git,
  github,
  gitlab,
  antd,
  reactRouter,
  supabase,
];
