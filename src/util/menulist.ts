export interface IMenu {
  label: string;
  path: string;
  backgroundColor: string;
  borderColor: string;
  order: number;
  gradient: string;
}

export const menuList: IMenu[] = [
  {
    label: "TLDR",
    path: "too-long-dont-read",
    // backgroundColor: "#E6FFFE",
    backgroundColor: "#0D99FF",
    borderColor: "#0D99FF",
    order: 0,
    gradient:
      "linear-gradient(to bottom right, #8DCFFF 0%, #ffffff 30%, #0D99FF 100%)",
  },
  {
    label: "My Journey",
    path: "my-journey",
    // backgroundColor: "#FFF7E0",
    backgroundColor: "#FFA638",
    borderColor: "#FFA638",
    order: 1,
    gradient:
      "linear-gradient(to bottom right, #FFC680 0%, #ffffff 30%, #FFA638 100%)",
  },
  {
    label: "About Me",
    path: "about-me",
    // backgroundColor: "#D8FFEA",
    backgroundColor: "#14AE5C",
    borderColor: "#14AE5C",
    order: 1,
    gradient:
      "linear-gradient(to bottom right, #7EE5AE 0%, #ffffff 30%, #14AE5C 100%)",
  },
  {
    label: "Resume",
    path: "resume",
    // backgroundColor: "#EEE1FF",
    backgroundColor: "#9747FF",
    borderColor: "#9747FF",
    order: 2,
    gradient:
      "linear-gradient(to bottom right, #D0ABFF 0%, #ffffff 30%, #9747FF 100%)",
  },
];
