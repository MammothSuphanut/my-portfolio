import Button from "@components/Button";
import Flex from "@components/Flex";
import { useAuth } from "@store/AuthZustand";
import { Outlet } from "react-router-dom";
import { menuList } from "util/menulist";
import theme from "theme/theme";
import Card from "@components/Card";
// import Image from "@components/Image";
// import raw_hello from "@assets/Pofile/raw_hello.jpg";

const MainLayout = () => {
  const { navigateTo } = useAuth();

  return (
    <Flex
      style={{
        height: "calc(100vh)",
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
        overflowY: "hidden",
        // overflowY: "scroll",
        background: theme.color.white2,
        // padding: "70px 40px 0px 40px",
        paddingTop: 70,
        // paddingTop: 50,
        // padding: "70px 0px 0px 0px",
        // padding: "130px 80px 40px 80px",
      }}
    >
      {/* <Flex
        style={{
          gap: 10,
          justifyContent: "flex-end",
          position: "absolute",
          top: 20,
          left: 60,
        }}
      >
        <Image
          style={{ height: 50, width: "auto", borderRadius: 25 }}
          src={raw_hello}
        />
      </Flex> */}
      <Flex
        style={{
          gap: 10,
          justifyContent: "flex-end",
          position: "absolute",
          top: 20,
          right: 60,
        }}
      >
        {menuList.map((item, index) => (
          <Button
            isAnimate
            key={index}
            onClick={() => {
              navigateTo(item.path);
            }}
            // rotation={0}
            // textStyle={{
            //   fontSize: "1.25vw",
            //   fontWeight: 700,
            //   color: theme.color.white,
            // }}
            // style={{
            //   backgroundColor:
            //     item.path === currentMenu.path
            //       ? item.borderColor
            //       : item.backgroundColor,
            //   border: `1.5px solid ${item.borderColor}`,
            // }}
            textStyle={{
              fontSize: "1.25vw",
              fontWeight: 700,
              color: theme.color.black100,
            }}
            style={{
              // backgroundColor: item.backgroundColor,
              // border: `1.5px solid ${item.backgroundColor}`,
              backgroundColor: theme.color.white,
              border: `1.5px solid ${theme.color.white}`,
            }}
          >
            {item.label}
          </Button>
        ))}
      </Flex>

      <Card
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          overflowY: "scroll",
          border: "none",
          boxShadow: "none",
          backgroundColor: theme.color.white3,
          padding: "40px 0px 0px 0px",
        }}
      >
        <Outlet />
      </Card>
    </Flex>
  );
};

export default MainLayout;
