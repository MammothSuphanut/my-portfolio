import Text from "@components/Text";
import Flex from "@components/Flex";
import Grid from "@components/Grid";
import theme from "theme/theme";
import { tools } from "util/tools";
import Image from "@components/Image";
// import Button from "@components/Button";
import styled from "@emotion/styled";
// import { useAuth } from "@store/AuthZustand";

const Content = styled.div`
  height: 40px;
  outline: none;

  z-index: 2;
  display: flex;
  gap: 10px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;

  background-color: ${theme.color.white};

  border: 15px solid ${theme.color.white};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const AboutMe = () => {
  // const { navigateTo } = useAuth();
  return (
    <Flex column style={{ gap: 50 }}>
      <Flex column style={{ gap: 20 }}>
        <Text
          style={{
            fontSize: "2vw",
            fontWeight: 700,
            color: theme.color.black100,
          }}
        >
          About Me
        </Text>
        <Text profile>
          Here’s a brief overview of my background and the tools I work with.
        </Text>
      </Flex>

      <Grid style={{ width: "90%", gap: 20 }} columns="1fr 0.1fr 1fr">
        <Flex column style={{ gap: 20, alignItems: "flex-start" }}>
          <Text
            style={{
              fontSize: "2vw",
              fontWeight: 700,
              color: theme.color.black100,
            }}
          >
            Hi again!
          </Text>
          <Text profile>
            {`\t`}I am a <strong>Web and Mobile Application developer</strong>,
            primarily working with TypeScript and JavaScript frameworks like
            Next.js, React, and React Native. While Ant Design is my go-to UI
            library, I also adapt to specific needs by using other libraries,
            such as Leaflet and FullCalendar.{"\n"}
            {`\t`}In addition to <strong>Front-end development</strong>, I’ve
            had the opportunity to work with tools outside the UI layer. I’ve
            using Supabase Figma and Jamboard and I have some testing
            experience.{"\n"}
            {`\t`}I enjoy exploring <strong>new approaches</strong>, and I
            believe that every experience, no matter how small, adds value and
            will benefit me in the future.
          </Text>
          {/* <Flex
            style={{
              width: "100%",
              justifyContent: "center",
              marginTop: 20,
              marginBottom: 20,
              gap: 20,
            }}
          >
            <Button
              // onClick={() => navigateTo("my-journey")}
              onClick={() => navigateTo("projects")}
              isAnimate
              textStyle={{ fontSize: 18, fontWeight: 700 }}
            >
              The projects I've worked on.
            </Button>
            <Button
              // onClick={() => navigateTo("my-journey")}
              onClick={() => navigateTo("resume")}
              isAnimate
              textStyle={{ fontSize: 18, fontWeight: 700 }}
            >
              Find Me More!
            </Button>
          </Flex> */}
        </Flex>

        <div />

        <Flex column style={{ gap: 20, alignItems: "flex-start" }}>
          <Text
            style={{
              fontSize: "2vw",
              fontWeight: 700,
              color: theme.color.black100,
            }}
          >
            My Preferred Tools!
          </Text>
          <Flex
            style={{
              flexWrap: "wrap",
              gap: 20,
              height: "fit-content",
              justifyContent: "flex-start",
            }}
          >
            {tools.map((item) => (
              <Content>
                <Image src={item?.image} rotateHover={0} width="30px" />
                <Text style={{ fontSize: 18, fontWeight: 700 }}>
                  {item?.title}
                </Text>
              </Content>
            ))}
          </Flex>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default AboutMe;
