import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface FlexProps {
  column?: boolean;
}
interface Props extends FlexProps {
  children: React.ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
}

const FlexStyles = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  justify-content: flex-start;
  align-items: center;
`;

export default function Flex({ children, ...props }: Props) {
  return <FlexStyles {...props}>{children}</FlexStyles>;
}
