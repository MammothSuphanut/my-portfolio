import { ReactNode } from "react";
import styled from "@emotion/styled";
import { TextProps } from "antd/lib/typography/Text";
import { Typography } from "antd";
import _ from "lodash";
type TextType = {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  title1?: boolean;
  title2?: boolean;
  body1?: boolean;
  body2?: boolean;
  body3?: boolean;
  bold?: boolean;
  semiBold?: boolean;
  medium?: boolean;
  light?: boolean;
  isButton?: boolean;
  fontSize?: number | string;
  locale?: string;
  color?: string;
  textAlign?: "left" | "center" | "right";
  margin?: string;
  width?: string | number;
  fontStyle?: string;
  rotate?: number;
  rotateHover?: number;
  HoverScale?: number;
};

interface Props extends TextProps, TextType {
  children: ReactNode;
  onClick?: () => void;
}

const TextComp = styled(Typography.Text)<TextType>`
  width: ${({ width }) =>
    (typeof width === "number" ? `${width}px` : width) || null};

  ${({ h1, h2, h3, h4, h5, title1, title2, body1, body2, body3, fontSize }) => {
    if (fontSize)
      return `
        font-size: ${typeof fontSize === "number" ? `${fontSize}px` : fontSize};
      `;
    if (h1)
      return `
        font-size: 32px;
      `;
    if (h2)
      return `
        font-size: 28px;
      `;
    if (h3)
      return `
        font-size: 26px;
      `;
    if (h4)
      return `
        font-size: 24px;
      `;
    if (h5)
      return `
        font-size: 22px;
      `;
    if (title1)
      return `
        font-size: 20px;
      `;
    if (title2)
      return `
        font-size: 18px;
      `;
    if (body1)
      return `
        font-size: 14px;
      `;
    if (body2)
      return `
        font-size: 12px;
      `;
    if (body3)
      return `
        font-size: 10px;
      `;
    return `
      font-size: 16px;
    `;
  }}
  z-index: 2;

  font-weight: ${({ bold, semiBold, medium, light }) => {
    if (bold) return 700;
    if (semiBold) return 600;
    if (medium) return 500;
    if (light) {
      return 300;
    }
    return 400;
  }};

  color: ${({ color }) => (!_.isEmpty(color) ? color : "#000")};

  cursor: ${({ onClick, isButton }) =>
    onClick || isButton ? "pointer" : "default"};

  ${({ textAlign }) => {
    return `
    text-align: ${textAlign ? textAlign : "center"};
    `;
  }}
  ${({ margin }) => {
    if (margin) {
      return `
        margin: ${margin};
      `;
    }
    return `margin: 0px;`;
  }}

  transition: transform 0.3s ease;
  ${({ rotate }) => `transform: rotate(${rotate || 0}deg);`}

  :hover {
    ${({ rotateHover, HoverScale }) =>
      `transform: scale(${HoverScale || 1.05}) rotate(${rotateHover || 0}deg);`}
  }}

  font-style: ${({ fontStyle }) => fontStyle || null};
`;

const Text = ({ children, ...props }: Props) => {
  return (
    <TextComp onClick={props?.onClick} {...props}>
      {children}
    </TextComp>
  );
};

export default Text;
