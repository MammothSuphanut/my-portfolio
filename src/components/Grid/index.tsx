import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface GridProps {
  columns?: string;
  rows?: string;
  padding?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  margin?: string;
  marginTop?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  gap?: string | number;
  rowGap?: string | number;
  columnGap?: string | number;
  alignItems?: string;
  justifyItems?: string;
  width?: string | number;
  height?: string | number;
}

interface Props extends GridProps {
  children: React.ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
}

const GridStyles = styled.div<GridProps>`
  display: grid;
  height: ${({ height }) =>
    (typeof height === "number" ? `${height}px` : height) || null};
  width: ${({ width }) =>
    (typeof width === "number" ? `${width}px` : width) || null};
  grid-template-columns: ${({ columns }) => columns || null};
  grid-template-rows: ${({ rows }) => rows || null};
  padding: ${({ padding }) => padding || null};
  padding-top: ${({ paddingTop }) =>
    (typeof paddingTop === "number" ? `${paddingTop}px` : paddingTop) || null};
  padding-right: ${({ paddingRight }) =>
    (typeof paddingRight === "number" ? `${paddingRight}px` : paddingRight) ||
    null};
  padding-bottom: ${({ paddingBottom }) =>
    (typeof paddingBottom === "number"
      ? `${paddingBottom}px`
      : paddingBottom) || null};
  padding-left: ${({ paddingLeft }) =>
    (typeof paddingLeft === "number" ? `${paddingLeft}px` : paddingLeft) ||
    null};
  margin: ${({ margin }) => margin || null};
  margin-top: ${({ marginTop }) =>
    (typeof marginTop === "number" ? `${marginTop}px` : marginTop) || null};
  margin-left: ${({ marginLeft }) =>
    (typeof marginLeft === "number" ? `${marginLeft}px` : marginLeft) || null};
  margin-right: ${({ marginRight }) =>
    (typeof marginRight === "number" ? `${marginRight}px` : marginRight) ||
    null};
  margin-bottom: ${({ marginBottom }) =>
    (typeof marginBottom === "number" ? `${marginBottom}px` : marginBottom) ||
    null};
  gap: ${({ gap }) => (typeof gap === "number" ? `${gap}px` : gap) || null};
  row-gap: ${({ rowGap }) =>
    (typeof rowGap === "number" ? `${rowGap}px` : rowGap) || null};
  column-gap: ${({ columnGap }) =>
    (typeof columnGap === "number" ? `${columnGap}px` : columnGap) || null};
  align-items: ${({ alignItems }) => alignItems || null};
  justify-items: ${({ justifyItems }) => justifyItems || null};
`;

export default function Grid({ children, ...props }: Props) {
  return <GridStyles {...props}>{children}</GridStyles>;
}
