import Button from "@components/Button";
import Card from "@components/Card";
import Flex from "@components/Flex";
import { useAuth } from "@store/AuthZustand";
import { Outlet } from "react-router-dom";
import { ContentLayout } from "./style";
import { menuList } from "util/menulist";
import theme from "theme/theme";
// import { useLocalization } from "@store/LocalizationZustand";

const MainLayout = () => {
  // const { locale, setLocale } = useLocalization();
  const { currentMenu, navigateTo } = useAuth();

  return (
    // <ContentLayout layoutBackgroundColor={theme.color.white}>
    <ContentLayout layoutBackgroundColorGradient={currentMenu.gradient}>
      <Card
        height="calc(100vh - 80px)"
        // backgroundColor={currentMenu.gradient}
        backgroundColor={theme.color.white}
        border={`1.5px solid ${currentMenu.gradient}`}
        style={{
          overflowY: "scroll",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
        padding="60px 40px 40px 40px"
      >
        <Flex
          gap={10}
          justifyContent="flex-end"
          style={{ position: "absolute", top: 20, right: 60 }}
        >
          {menuList.map((item, index) => (
            <Button
              // rotation={0}
              bold
              fontSize="1.25vw"
              key={index}
              onClick={() => {
                navigateTo(item.path);
              }}
              style={{
                backgroundColor:
                  item.path === currentMenu.path
                    ? item.borderColor
                    : item.backgroundColor,
                border: `1.5px solid ${item.borderColor}`,
              }}
              textColor={theme.color.white}
            >
              {item.label}
            </Button>
          ))}
          {/* <Button
            bold
            fontSize={20}
            onClick={() => {
              setLocale(locale === "th" ? "en" : "th");
            }}
            style={{
              backgroundColor: theme.color.white,
              border: `1.5px solid ${theme.color.black100}`,
            }}
          >
            {locale}
          </Button> */}
        </Flex>
        <Outlet />
      </Card>
    </ContentLayout>
  );
};

export default MainLayout;
