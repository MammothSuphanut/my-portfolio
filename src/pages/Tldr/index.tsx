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

import theme from "theme/theme";
import { contactList } from "util/contacts";
// import { useAuth } from "@store/AuthZustand";
// import Button from "@components/Button";

const Tldr = () => {
  // const { navigateTo } = useAuth();
  return (
    <Grid style={{ width: "90%", justifyItems: "center" }} columns="0.7fr 1fr">
      <Flex style={{ alignItems: "flex-start" }}>
        <Image
          src={hello2}
          canFlip
          flipSrc={raw_hello}
          rotateHover={0}
          HoverScale={1.05}
          width="60vh"
          height="auto"
          rotate={-5}
          isPicBorder
          tooltipText="Swap!?"
          tooltipPosition="topRight"
        />
      </Flex>

      <Grid
        rows="1fr 1fr"
        style={{ height: "100%", alignItems: "center", justifyItems: "center" }}
      >
        <Flex
          column
          style={{
            alignItems: "flex-end",
            height: "100%",
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              fontSize: "1.4vw",
              fontWeight: 500,
              color: theme.color.black50,
            }}
          >
            ( Feel free to call me Mammoth )
          </Text>
          <Text
            style={{
              fontSize: "2.5vw",
              fontWeight: 700,
              color: theme.color.black100,
            }}
          >
            Hello, My name is SUPHANUT CHANDEE
          </Text>
          <Text
            // HoverScale={1}
            style={{
              fontSize: "1.75vw",
              fontWeight: 600,
              color: theme.color.black75,
            }}
          >
            Web and Mobile Application developer
          </Text>
        </Flex>
        <Flex
          style={{
            width: "100%",
            justifyContent: "center",
            gap: "1vw",
          }}
        >
          {contactList.map((item) => (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Image
                HoverScale={1.2}
                src={item.image}
                width="4vw"
                height="auto"
              />
            </a>
          ))}
        </Flex>
        {/* <Flex>
          <Button
            // onClick={() => navigateTo("my-journey")}
            onClick={() => navigateTo("about-me")}
            isAnimate
            textStyle={{ fontSize: 18, fontWeight: 700 }}
          >
            Would you like to learn more about me?
          </Button>
        </Flex> */}
      </Grid>
    </Grid>
  );
};

export default Tldr;
