import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ReactNode } from "react";

interface CardType {
  opacity?: number;
  padding?: string | number;
  borderRadius?: number;
  border?: string;
  borderHover?: string;
  width?: string | number;
  height?: string | number;
  minHeight?: string | number;
  relative?: boolean;
  left?: string;
  top?: string;
  noBorder?: boolean;
  backgroundColor?: string;
}

interface Props extends CardType {
  onClick?: () => void;
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const CustomCard = styled.div<CardType>`
  ${({
    opacity,
    padding,
    borderRadius,
    width,
    height,
    relative,
    left,
    top,
    border,
    noBorder,
    borderHover,
    backgroundColor,
    minHeight,
  }) => {
    return css`
      background: ${backgroundColor ? backgroundColor : "#FFF"};
      height: ${(typeof height === "number" ? `${height}px` : height) || ""};
      min-height: ${(typeof minHeight === "number"
        ? `${minHeight}px`
        : minHeight) || ""};
      width: ${(typeof width === "number" ? `${width}px` : width) || ""};
      padding: ${(typeof padding === "number" ? `${padding}px` : padding) ||
      "20px"};
      border: ${noBorder ? null : border ? `${border}` : `1.5px solid #CBD5E1`};
      border-radius: ${(typeof borderRadius === "number"
        ? `${borderRadius}px`
        : borderRadius) || "8px"};
      opacity: ${opacity ? `${opacity}%` : "100%"};

      position: ${relative ? `relative` : ``};
      left: ${(typeof left === "number" ? `${left}px` : left) || ""};
      top: ${(typeof top === "number" ? `${top}px` : top) || ""};

      &:hover {
        border: ${borderHover ? `${borderHover}` : ``};
      }
    `;
  }};
`;

function Card({
  onClick,
  children,
  style,
  className,
  ...props
}: Props): JSX.Element {
  return (
    <CustomCard
      onClick={onClick}
      style={style}
      className={className}
      {...props}
    >
      {children}
    </CustomCard>
  );
}

export default Card;
