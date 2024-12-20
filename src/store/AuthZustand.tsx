import { useNavigate } from "react-router-dom";
import { IMenu, menuList } from "util/menulist";
import { create } from "zustand";

interface Props {
  count: number;
  setCount: (value: number) => void;

  path: string;
  setPath: (path: string) => void;

  currentMenu: IMenu;

  navigateTo: (path: string, navigate: (path: string) => void) => void;

  curTheme: string;
  setTheme: (theme: string) => void;
}

const useAuthStore = create<Props>((set) => ({
  count: 0,
  path: "",
  currentMenu: menuList[0],
  curTheme: "whiteTheme",

  setCount: async (value: number) => {
    set({ count: value });
  },

  setPath: async (path: string) => {
    set({ path });
  },

  navigateTo: async (path: string, navigate: (path: string) => void) => {
    const curMenu = menuList.filter((item: IMenu) => item.path === path);
    if (curMenu.length > 0) {
      set({ currentMenu: curMenu[0], path: path });
      navigate(`/${path}`);
    }
  },

  setTheme: async (theme: string) => {
    set({ curTheme: theme });
  },
}));

export const useAuth = () => {
  const navigate = useNavigate();
  const authStore = useAuthStore();

  return {
    ...authStore,
    navigateTo: (path: string) => authStore.navigateTo(path, navigate),
  };
};
