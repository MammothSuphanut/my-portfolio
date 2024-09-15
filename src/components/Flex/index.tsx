import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface FlexProps {
  row?: boolean;
  column?: boolean;
  rowReverse?: boolean;
  columnReverse?: boolean;
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch";
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
  flex?: number;
  height?: string | number;
  width?: string | number;
  warp?: string;
  id?: string;
}
interface Props extends FlexProps {
  children: React.ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
}

const FlexStyles = styled.div<FlexProps>`
  display: flex;
  flex: ${({ flex }) => flex || null};
  height: ${({ height }) =>
    (typeof height === "number" ? `${height}px` : height) || null};
  width: ${({ width }) =>
    (typeof width === "number" ? `${width}px` : width) || null};
  flex-direction: ${({ row, column, rowReverse, columnReverse }) => {
    if (row) {
      return "row";
    }
    if (column) {
      return "column";
    }
    if (rowReverse) {
      return "row-reverse";
    }
    if (columnReverse) {
      return "column-reverse";
    }
    return "row";
  }};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "center"};
  padding: ${(props) =>
    (typeof props.padding === "number"
      ? `${props.padding}px`
      : props.padding) || null};
  padding-top: ${(props) =>
    (typeof props.paddingTop === "number"
      ? `${props.paddingTop}px`
      : props.paddingTop) || null};
  padding-right: ${(props) =>
    (typeof props.paddingRight === "number"
      ? `${props.paddingRight}px`
      : props.paddingRight) || null};
  padding-bottom: ${(props) =>
    (typeof props.paddingBottom === "number"
      ? `${props.paddingBottom}px`
      : props.paddingBottom) || null};
  padding-left: ${(props) =>
    (typeof props.paddingLeft === "number"
      ? `${props.paddingLeft}px`
      : props.paddingLeft) || null};
  margin-top: ${(props) =>
    (typeof props.margin === "number" ? `${props.margin}px` : props.margin) ||
    null};
  margin-top: ${(props) =>
    (typeof props.marginTop === "number"
      ? `${props.marginTop}px`
      : props.marginTop) || null};
  margin-left: ${(props) =>
    (typeof props.marginLeft === "number"
      ? `${props.marginLeft}px`
      : props.marginLeft) || null};
  margin-right: ${(props) =>
    (typeof props.marginRight === "number"
      ? `${props.marginRight}px`
      : props.marginRight) || null};
  margin-bottom: ${(props) =>
    (typeof props.marginBottom === "number"
      ? `${props.marginBottom}px`
      : props.marginBottom) || null};
  gap: ${(props) =>
    (typeof props.gap === "number" ? `${props.gap}px` : props.gap) || null};
  flex-wrap: ${(props) => (props.warp ? `${props.warp}` : null)};
`;

export default function Flex({ children, ...props }: Props) {
  return <FlexStyles {...props}>{children}</FlexStyles>;
}
