import Text from "@components/Text";
import Flex from "@components/Flex";
import theme from "theme/theme";
import Grid from "@components/Grid";
import styled from "@emotion/styled";
import Image from "@components/Image";
import { projectList } from "util/projects";

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

const Projects = () => {
  return (
    <Flex
      column
      style={{
        gap: 50,
        width: "100%",
        height: "100%",
      }}
    >
      <Flex column style={{ gap: 20 }}>
        <Text
          style={{
            fontSize: "2vw",
            fontWeight: 700,
            color: theme.color.black100,
          }}
        >
          Projects
        </Text>
        <Text profile>
          These are the projects I've worked on and the tools I've used.
        </Text>
      </Flex>

      {projectList.map((item) => (
        <Grid style={{ width: "90%", columnGap: 20 }} columns="1fr 0.1fr 1fr">
          <Flex column style={{ gap: 20, alignItems: "center" }}>
            <Image
              isPicBorder
              rotateHover={0}
              src={item?.image}
              style={{ maxWidth: 700, height: 500 }}
              // style={{ maxWidth: 700, maxHeight: 500 }}
            />
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
              {item?.name}
            </Text>
            <Text projectDesc>{item?.desc}</Text>
            <Text
              style={{
                fontSize: "1.7vw",
                fontWeight: 700,
                color: theme.color.black100,
              }}
            >
              Tools Used
            </Text>
            <Flex
              style={{
                flexWrap: "wrap",
                gap: 20,
                height: "fit-content",
                justifyContent: "flex-start",
              }}
            >
              {item?.tools.map((item) => (
                <Content>
                  <Image rotateHover={0} src={item?.image} width="30px" />
                  <Text style={{ fontSize: 18, fontWeight: 700 }}>
                    {item?.title}
                  </Text>
                </Content>
              ))}
            </Flex>
          </Flex>
        </Grid>
      ))}
      <Text
        style={{
          fontSize: "1.25vw",
          fontWeight: 700,
          color: theme.color.black100,
          paddingBottom: 50,
        }}
      >
        Comming Soon . . .
      </Text>
    </Flex>
  );
};

export default Projects;
