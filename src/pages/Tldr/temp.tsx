import "src/App.css";
import Text from "@components/Text";
import Flex from "@components/Flex";
import Image from "@components/Image";
// import hello from "@assets/Pofile/hello.jpeg";
import hello2 from "@assets/Pofile/hello2.jpg";
import Grid from "@components/Grid";
// import { useLocalization } from "@store/LocalizationZustand";

const Tldr = () => {
  // const { t } = useLocalization();

  return (
    <Grid rows="1fr 1fr" alignItems="center">
      <Grid
        width="100%"
        columns="0.7fr 1fr"
        alignItems="center"
        justifyItems="center"
      >
        <Image src={hello2} width="500px" height="auto" rotate={-5} />

        {/* <Text h1 bold fontStyle="italic">
          “ {t("TLDR.qoute")} ”
        </Text> */}
        {/* <Text h1 bold>
          Hello I'M SUPHANUT CHANDEE
        </Text> */}
        {/* <Text h1 medium>
            Front-end Developer
          </Text>
          <Text>Web / Mobile Applications</Text> */}
        <Flex>
          <Flex column alignItems="flex-end">
            <Text>( My nickname is Mammoth )</Text>
            <Text h1 bold>
              Hello, My name is SUPHANUT CHANDEE
            </Text>
            <Text title2 medium>
              Front-end web and mobile developer
            </Text>
          </Flex>
        </Flex>
      </Grid>

      <Flex column width="100%">
        <Text h1 medium>
          My Journey.
        </Text>
      </Flex>
    </Grid>
  );
};

export default Tldr;
