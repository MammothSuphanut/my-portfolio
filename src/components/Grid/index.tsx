import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface GridProps {
  columns?: string;
  rows?: string;
}

interface Props extends GridProps {
  children: React.ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
}

const GridStyles = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || null};
  grid-template-rows: ${({ rows }) => rows || null};
`;

export default function Grid({ children, ...props }: Props) {
  return <GridStyles {...props}>{children}</GridStyles>;
}
