import "src/App.css";
import Text from "@components/Text";
import Flex from "@components/Flex";
import Image from "@components/Image";
// import hello from "@assets/Pofile/hello.jpeg";

import Grid from "@components/Grid";
// import Button from "@components/Button";
// import theme from "theme/theme";
// import { menuList } from "util/menulist";
// import { useAuth } from "@store/AuthZustand";
// import { useLocalization } from "@store/LocalizationZustand";
// import theme from "theme/theme";
import hello2 from "@assets/Pofile/hello2.jpg";
import raw_hello from "@assets/Pofile/raw_hello.jpg";
import linkedin from "@assets/Icon/linkedin.svg";
import gmail from "@assets/Icon/gmail.svg";
import line from "@assets/Icon/line.svg";
import theme from "theme/theme";

const Tldr = () => {
  const contacts = [
    {
      link: "https://www.linkedin.com/in/suphanut-chandee-7653682b9",
      iamge: linkedin,
    },
    {
      link: "mailto:suphanut.work@gmail.com",
      iamge: gmail,
    },
    {
      link: "https://line.me/R/ti/p/mothrock2000@gmail.com",
      iamge: line,
    },
  ];

  return (
    <Grid
      height="calc(100vh - 180px)"
      width="100%"
      columns="0.7fr 1fr"
      alignItems="center"
      justifyItems="center"
    >
      <Image
        src={hello2}
        canFlip
        flipSrc={raw_hello}
        rotateHover={0}
        width="30vw"
        height="auto"
        rotate={-5}
        isPicBorder
        tooltipText="Swap!?"
        tooltipPosition="topRight"
      />
      <Grid
        rows="1fr 1fr"
        height="100%"
        alignItems="center"
        justifyItems="center"
      >
        <Flex
          column
          alignItems="flex-end"
          height="100%"
          justifyContent="flex-end"
        >
          <Text fontSize="1.4vw" medium color={theme.color.primary2}>
            ( Feel free to call me Mammoth )
          </Text>
          <Text fontSize="2.5vw" bold color={theme.color.primary}>
            Hello, My name is SUPHANUT CHANDEE
          </Text>
          <Text
            // HoverScale={1}
            fontSize="1.75vw"
            semiBold
            color={theme.color.primary3}
          >
            Front-end web and mobile developer
          </Text>
        </Flex>
        <Flex row width="100%" justifyContent="center" gap="1vw">
          {contacts.map((item) => (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Image
                HoverScale={1.2}
                src={item.iamge}
                width="4vw"
                height="auto"
              />
            </a>
          ))}
        </Flex>
      </Grid>
    </Grid>
  );
};

export default Tldr;
