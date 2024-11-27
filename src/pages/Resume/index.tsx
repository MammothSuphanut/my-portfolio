// import Text from "@components/Text";
// import Flex from "@components/Flex";
import Resume_IMG from "@assets/Resume/Resume_IMG.png";
import Resume_PDF from "@assets/Resume/Resume_PDF.pdf";
import Image from "@components/Image";
// import theme from "theme/theme";
// import Grid from "@components/Grid";
// import { contactList } from "util/contacts";

const Resume = () => {
  return (
    // <Grid style={{ width: "90%", justifyItems: "center" }} columns="0.7fr 1fr">
    //   <Image
    //     width="60vh"
    //     height="auto"
    //     isPicBorder
    //     HoverScale={1.05}
    //     rotateHover={0}
    //     src={Resume_IMG}
    //     tooltipText="Click Here to View the PDF !!!"
    //     tooltipPosition="topRight"
    //     onClick={() => window.open(Resume_PDF, "_blank")}
    //   />
    //   <Grid
    //     rows="1fr 1fr"
    //     style={{ height: "100%", alignItems: "center", justifyItems: "center" }}
    //   >
    //     <Flex
    //       column
    //       style={{
    //         alignItems: "flex-end",
    //         height: "100%",
    //         justifyContent: "flex-end",
    //       }}
    //     >
    //       <Text
    //         style={{
    //           fontSize: "1.5vw",
    //           fontWeight: 500,
    //           color: theme.color.black75,
    //         }}
    //       >
    //         Additional details can be found in this resume.
    //       </Text>
    //       <Text
    //         style={{
    //           fontSize: "1.4vw",
    //           fontWeight: 500,
    //           color: theme.color.black50,
    //         }}
    //       >
    //         ( Click the Image to View the PDF. )
    //       </Text>
    //     </Flex>

    //     <Flex
    //       style={{
    //         width: "100%",
    //         justifyContent: "center",
    //         gap: "1vw",
    //       }}
    //     >
    //       {contactList.map((item) => (
    //         <a href={item.link} target="_blank" rel="noopener noreferrer">
    //           <Image
    //             HoverScale={1.2}
    //             src={item.image}
    //             width="4vw"
    //             height="auto"
    //           />
    //         </a>
    //       ))}
    //     </Flex>
    //   </Grid>
    // </Grid>
    <Image
      width="60vh"
      height="auto"
      isPicBorder
      HoverScale={1.05}
      rotateHover={0}
      src={Resume_IMG}
      tooltipText="Click Here to View the PDF !!!"
      tooltipPosition="topRight"
      onClick={() => window.open(Resume_PDF, "_blank")}
    />
  );
};

export default Resume;
